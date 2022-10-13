package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateEntityToThingXAmzTargetEnum string

const (
	AssociateEntityToThingXAmzTargetEnumIotThingsGraphFrontEndServiceAssociateEntityToThing AssociateEntityToThingXAmzTargetEnum = "IotThingsGraphFrontEndService.AssociateEntityToThing"
)

type AssociateEntityToThingHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateEntityToThingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateEntityToThingRequest struct {
	Headers AssociateEntityToThingHeaders
	Request shared.AssociateEntityToThingRequest `request:"mediaType=application/json"`
}

type AssociateEntityToThingResponse struct {
	AssociateEntityToThingResponse map[string]interface{}
	ContentType                    string
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
