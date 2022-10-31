package operations

import (
	"openapi/pkg/models/shared"
)

type GetRecommenderConfigurationPathParams struct {
	RecommenderID string `pathParam:"style=simple,explode=false,name=recommender-id"`
}

type GetRecommenderConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
