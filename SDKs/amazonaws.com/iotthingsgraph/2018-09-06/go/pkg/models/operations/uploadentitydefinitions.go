package operations

import (
	"openapi/pkg/models/shared"
)

type UploadEntityDefinitionsXAmzTargetEnum string

const (
	UploadEntityDefinitionsXAmzTargetEnumIotThingsGraphFrontEndServiceUploadEntityDefinitions UploadEntityDefinitionsXAmzTargetEnum = "IotThingsGraphFrontEndService.UploadEntityDefinitions"
)

type UploadEntityDefinitionsHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UploadEntityDefinitionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UploadEntityDefinitionsRequest struct {
	Headers UploadEntityDefinitionsHeaders
	Request shared.UploadEntityDefinitionsRequest `request:"mediaType=application/json"`
}

type UploadEntityDefinitionsResponse struct {
	ContentType                     string
	InternalFailureException        *interface{}
	InvalidRequestException         *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	UploadEntityDefinitionsResponse *shared.UploadEntityDefinitionsResponse
}
