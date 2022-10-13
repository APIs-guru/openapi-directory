package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterManagedInstanceXAmzTargetEnum string

const (
	DeregisterManagedInstanceXAmzTargetEnumAmazonSsmDeregisterManagedInstance DeregisterManagedInstanceXAmzTargetEnum = "AmazonSSM.DeregisterManagedInstance"
)

type DeregisterManagedInstanceHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterManagedInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeregisterManagedInstanceRequest struct {
	Headers DeregisterManagedInstanceHeaders
	Request shared.DeregisterManagedInstanceRequest `request:"mediaType=application/json"`
}

type DeregisterManagedInstanceResponse struct {
	ContentType                     string
	DeregisterManagedInstanceResult map[string]interface{}
	InternalServerError             *interface{}
	InvalidInstanceID               *interface{}
	StatusCode                      int64
}
