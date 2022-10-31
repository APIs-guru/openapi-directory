package operations

import (
	"openapi/pkg/models/shared"
)

type StopServerXAmzTargetEnum string

const (
	StopServerXAmzTargetEnumTransferServiceStopServer StopServerXAmzTargetEnum = "TransferService.StopServer"
)

type StopServerHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopServerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopServerRequest struct {
	Headers StopServerHeaders
	Request shared.StopServerRequest `request:"mediaType=application/json"`
}

type StopServerResponse struct {
	ContentType                 string
	InternalServiceError        *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
