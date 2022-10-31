package operations

import (
	"openapi/pkg/models/shared"
)

type ListServersQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListServersXAmzTargetEnum string

const (
	ListServersXAmzTargetEnumTransferServiceListServers ListServersXAmzTargetEnum = "TransferService.ListServers"
)

type ListServersHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListServersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListServersRequest struct {
	QueryParams ListServersQueryParams
	Headers     ListServersHeaders
	Request     shared.ListServersRequest `request:"mediaType=application/json"`
}

type ListServersResponse struct {
	ContentType                 string
	InternalServiceError        *interface{}
	InvalidNextTokenException   *interface{}
	InvalidRequestException     *interface{}
	ListServersResponse         *shared.ListServersResponse
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
