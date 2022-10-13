package operations

import (
	"openapi/pkg/models/shared"
)

type DissociateEntityFromThingXAmzTargetEnum string

const (
	DissociateEntityFromThingXAmzTargetEnumIotThingsGraphFrontEndServiceDissociateEntityFromThing DissociateEntityFromThingXAmzTargetEnum = "IotThingsGraphFrontEndService.DissociateEntityFromThing"
)

type DissociateEntityFromThingHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DissociateEntityFromThingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DissociateEntityFromThingRequest struct {
	Headers DissociateEntityFromThingHeaders
	Request shared.DissociateEntityFromThingRequest `request:"mediaType=application/json"`
}

type DissociateEntityFromThingResponse struct {
	ContentType                       string
	DissociateEntityFromThingResponse map[string]interface{}
	InternalFailureException          *interface{}
	InvalidRequestException           *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
}
