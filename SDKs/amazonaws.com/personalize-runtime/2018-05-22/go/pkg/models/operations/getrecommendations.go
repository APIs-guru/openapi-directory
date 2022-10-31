package operations

import (
	"openapi/pkg/models/shared"
)

type GetRecommendationsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetRecommendationsRequestBody struct {
	CampaignArn  string            `json:"campaignArn"`
	Context      map[string]string `json:"context,omitempty"`
	FilterArn    *string           `json:"filterArn,omitempty"`
	FilterValues map[string]string `json:"filterValues,omitempty"`
	ItemID       *string           `json:"itemId,omitempty"`
	NumResults   *int64            `json:"numResults,omitempty"`
	UserID       *string           `json:"userId,omitempty"`
}

type GetRecommendationsRequest struct {
	Headers GetRecommendationsHeaders
	Request GetRecommendationsRequestBody `request:"mediaType=application/json"`
}

type GetRecommendationsResponse struct {
	ContentType                string
	GetRecommendationsResponse *shared.GetRecommendationsResponse
	InvalidInputException      *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
}
