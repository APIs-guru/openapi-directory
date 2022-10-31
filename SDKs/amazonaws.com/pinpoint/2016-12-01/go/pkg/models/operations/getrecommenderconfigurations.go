package operations

import (
	"openapi/pkg/models/shared"
)

type GetRecommenderConfigurationsQueryParams struct {
	PageSize *string `queryParam:"style=form,explode=true,name=page-size"`
	Token    *string `queryParam:"style=form,explode=true,name=token"`
}

type GetRecommenderConfigurationsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetRecommenderConfigurationsRequest struct {
	QueryParams GetRecommenderConfigurationsQueryParams
	Headers     GetRecommenderConfigurationsHeaders
}

type GetRecommenderConfigurationsResponse struct {
	BadRequestException                  *interface{}
	ContentType                          string
	ForbiddenException                   *interface{}
	GetRecommenderConfigurationsResponse *shared.GetRecommenderConfigurationsResponse
	InternalServerErrorException         *interface{}
	MethodNotAllowedException            *interface{}
	NotFoundException                    *interface{}
	PayloadTooLargeException             *interface{}
	StatusCode                           int64
	TooManyRequestsException             *interface{}
}
