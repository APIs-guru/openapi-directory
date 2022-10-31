package operations

import (
	"openapi/pkg/models/shared"
)

type GetPersonalizedRankingHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetPersonalizedRankingRequestBody struct {
	CampaignArn  string            `json:"campaignArn"`
	Context      map[string]string `json:"context,omitempty"`
	FilterArn    *string           `json:"filterArn,omitempty"`
	FilterValues map[string]string `json:"filterValues,omitempty"`
	InputList    []string          `json:"inputList"`
	UserID       string            `json:"userId"`
}

type GetPersonalizedRankingRequest struct {
	Headers GetPersonalizedRankingHeaders
	Request GetPersonalizedRankingRequestBody `request:"mediaType=application/json"`
}

type GetPersonalizedRankingResponse struct {
	ContentType                    string
	GetPersonalizedRankingResponse *shared.GetPersonalizedRankingResponse
	InvalidInputException          *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
