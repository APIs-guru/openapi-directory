package operations

import (
	"openapi/pkg/models/shared"
)

type GetRecommenderConfigurationsQueryParams struct {
	PageSize *string `queryParam:"style=form,explode=true,name=page-size"`
	Token    *string `queryParam:"style=form,explode=true,name=token"`
}

type GetRecommenderConfigurationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
