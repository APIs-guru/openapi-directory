package operations

import (
	"openapi/pkg/models/shared"
)

type GetRecommenderConfigurationPathParams struct {
	RecommenderID string `pathParam:"style=simple,explode=false,name=recommender-id"`
}

type GetRecommenderConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRecommenderConfigurationRequest struct {
	PathParams GetRecommenderConfigurationPathParams
	Headers    GetRecommenderConfigurationHeaders
}

type GetRecommenderConfigurationResponse struct {
	BadRequestException                 *interface{}
	ContentType                         string
	ForbiddenException                  *interface{}
	GetRecommenderConfigurationResponse *shared.GetRecommenderConfigurationResponse
	InternalServerErrorException        *interface{}
	MethodNotAllowedException           *interface{}
	NotFoundException                   *interface{}
	PayloadTooLargeException            *interface{}
	StatusCode                          int64
	TooManyRequestsException            *interface{}
}
