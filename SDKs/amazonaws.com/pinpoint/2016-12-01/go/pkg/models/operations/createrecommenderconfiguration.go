package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRecommenderConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateRecommenderConfigurationRequestBodyCreateRecommenderConfiguration struct {
	Attributes                    map[string]string `json:"Attributes,omitempty"`
	Description                   *string           `json:"Description,omitempty"`
	Name                          *string           `json:"Name,omitempty"`
	RecommendationProviderIDType  *string           `json:"RecommendationProviderIdType,omitempty"`
	RecommendationProviderRoleArn *string           `json:"RecommendationProviderRoleArn,omitempty"`
	RecommendationProviderURI     *string           `json:"RecommendationProviderUri,omitempty"`
	RecommendationTransformerURI  *string           `json:"RecommendationTransformerUri,omitempty"`
	RecommendationsDisplayName    *string           `json:"RecommendationsDisplayName,omitempty"`
	RecommendationsPerMessage     *int64            `json:"RecommendationsPerMessage,omitempty"`
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
