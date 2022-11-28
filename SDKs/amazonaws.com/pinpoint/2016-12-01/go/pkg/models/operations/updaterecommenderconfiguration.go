package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRecommenderConfigurationPathParams struct {
	RecommenderID string `pathParam:"style=simple,explode=false,name=recommender-id"`
}

type UpdateRecommenderConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration
// Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
type UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration struct {
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

type UpdateRecommenderConfigurationRequestBody struct {
	UpdateRecommenderConfiguration UpdateRecommenderConfigurationRequestBodyUpdateRecommenderConfiguration `json:"UpdateRecommenderConfiguration"`
}

type UpdateRecommenderConfigurationRequest struct {
	PathParams UpdateRecommenderConfigurationPathParams
	Headers    UpdateRecommenderConfigurationHeaders
	Request    UpdateRecommenderConfigurationRequestBody `request:"mediaType=application/json"`
}

type UpdateRecommenderConfigurationResponse struct {
	BadRequestException                    *interface{}
	ContentType                            string
	ForbiddenException                     *interface{}
	InternalServerErrorException           *interface{}
	MethodNotAllowedException              *interface{}
	NotFoundException                      *interface{}
	PayloadTooLargeException               *interface{}
	StatusCode                             int64
	TooManyRequestsException               *interface{}
	UpdateRecommenderConfigurationResponse *shared.UpdateRecommenderConfigurationResponse
}
