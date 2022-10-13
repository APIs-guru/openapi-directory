package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLayerXAmzTargetEnum string

const (
	DeleteLayerXAmzTargetEnumOpsWorks20130218DeleteLayer DeleteLayerXAmzTargetEnum = "OpsWorks_20130218.DeleteLayer"
)

type DeleteLayerHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLayerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteLayerRequest struct {
	Headers DeleteLayerHeaders
	Request shared.DeleteLayerRequest `request:"mediaType=application/json"`
}

type DeleteLayerResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
