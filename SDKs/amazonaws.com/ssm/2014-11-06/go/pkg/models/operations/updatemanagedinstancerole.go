package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateManagedInstanceRoleXAmzTargetEnum string

const (
	UpdateManagedInstanceRoleXAmzTargetEnumAmazonSsmUpdateManagedInstanceRole UpdateManagedInstanceRoleXAmzTargetEnum = "AmazonSSM.UpdateManagedInstanceRole"
)

type UpdateManagedInstanceRoleHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateManagedInstanceRoleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateManagedInstanceRoleRequest struct {
	Headers UpdateManagedInstanceRoleHeaders
	Request shared.UpdateManagedInstanceRoleRequest `request:"mediaType=application/json"`
}

type UpdateManagedInstanceRoleResponse struct {
	ContentType                     string
	InternalServerError             *interface{}
	InvalidInstanceID               *interface{}
	StatusCode                      int64
	UpdateManagedInstanceRoleResult map[string]interface{}
}
