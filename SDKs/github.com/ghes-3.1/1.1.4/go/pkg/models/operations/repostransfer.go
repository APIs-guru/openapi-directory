package operations

import (
	"openapi/pkg/models/shared"
)

type ReposTransferPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposTransferRequestBody struct {
	NewOwner string  `json:"new_owner"`
	TeamIds  []int64 `json:"team_ids,omitempty"`
}

type ReposTransferRequest struct {
	PathParams ReposTransferPathParams
	Request    *ReposTransferRequestBody `request:"mediaType=application/json"`
}

type ReposTransferResponse struct {
	ContentType       string
	StatusCode        int64
	MinimalRepository *shared.MinimalRepository
}
