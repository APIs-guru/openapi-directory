package operations

import (
	"openapi/pkg/models/shared"
)

type GetPersonalizedRankingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
