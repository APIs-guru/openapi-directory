package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteConnectorPathParams struct {
	ConnectorArn string `pathParam:"style=simple,explode=false,name=connectorArn"`
}

type DeleteConnectorQueryParams struct {
	CurrentVersion *string `queryParam:"style=form,explode=true,name=currentVersion"`
}

type DeleteConnectorHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteConnectorRequest struct {
	PathParams  DeleteConnectorPathParams
	QueryParams DeleteConnectorQueryParams
	Headers     DeleteConnectorHeaders
}

type DeleteConnectorResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DeleteConnectorResponse      *shared.DeleteConnectorResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UnauthorizedException        *interface{}
}
