package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRecommenderConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration struct {
	Attributes                    map[string]string `json:"Attributes"`
	Description                   *string           `json:"Description"`
	Name                          *string           `json:"Name"`
	RecommendationProviderIDType  *string           `json:"RecommendationProviderIdType"`
	RecommendationProviderRoleArn *string           `json:"RecommendationProviderRoleArn"`
	RecommendationProviderURI     *string           `json:"RecommendationProviderUri"`
	RecommendationTransformerURI  *string           `json:"RecommendationTransformerUri"`
	RecommendationsDisplayName    *string           `json:"RecommendationsDisplayName"`
	RecommendationsPerMessage     *int64            `json:"RecommendationsPerMessage"`
}

type CreateRecommenderConfigurationRequestBody struct {
	CreateRecommenderConfiguration CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration `json:"CreateRecommenderConfiguration"`
}

type CreateRecommenderConfigurationRequest struct {
	Headers CreateRecommenderConfigurationHeaders
	Request CreateRecommenderConfigurationRequestBody `request:"mediaType=application/json"`
}

type CreateRecommenderConfigurationResponse struct {
	BadRequestException                    *interface{}
	ContentType                            string
	CreateRecommenderConfigurationResponse *shared.CreateRecommenderConfigurationResponse
	ForbiddenException                     *interface{}
	InternalServerErrorException           *interface{}
	MethodNotAllowedException              *interface{}
	NotFoundException                      *interface{}
	PayloadTooLargeException               *interface{}
	StatusCode                             int64
	TooManyRequestsException               *interface{}
}
