package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAssociationStatusXAmzTargetEnum string

const (
	UpdateAssociationStatusXAmzTargetEnumAmazonSsmUpdateAssociationStatus UpdateAssociationStatusXAmzTargetEnum = "AmazonSSM.UpdateAssociationStatus"
)

type UpdateAssociationStatusHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAssociationStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateAssociationStatusRequest struct {
	Headers UpdateAssociationStatusHeaders
	Request shared.UpdateAssociationStatusRequest `request:"mediaType=application/json"`
}

type UpdateAssociationStatusResponse struct {
	AssociationDoesNotExist       *interface{}
	ContentType                   string
	InternalServerError           *interface{}
	InvalidDocument               *interface{}
	InvalidInstanceID             *interface{}
	StatusCode                    int64
	StatusUnchanged               *interface{}
	TooManyUpdates                *interface{}
	UpdateAssociationStatusResult *shared.UpdateAssociationStatusResult
}
