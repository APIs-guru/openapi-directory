package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteResourceShareQueryParams struct {
	ClientToken      *string `queryParam:"style=form,explode=true,name=clientToken"`
	ResourceShareArn string  `queryParam:"style=form,explode=true,name=resourceShareArn"`
}

type DeleteResourceShareHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteResourceShareRequest struct {
	QueryParams DeleteResourceShareQueryParams
	Headers     DeleteResourceShareHeaders
}

type DeleteResourceShareResponse struct {
	ContentType                          string
	DeleteResourceShareResponse          *shared.DeleteResourceShareResponse
	IdempotentParameterMismatchException *interface{}
	InvalidClientTokenException          *interface{}
	InvalidParameterException            *interface{}
	InvalidStateTransitionException      *interface{}
	MalformedArnException                *interface{}
	OperationNotPermittedException       *interface{}
	ServerInternalException              *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
	UnknownResourceException             *interface{}
}
