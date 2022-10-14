package operations

import (
	"openapi/pkg/models/shared"
)

type ReposDeletePathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposDeleteRequest struct {
	PathParams ReposDeletePathParams
}

type ReposDelete403ApplicationJSON struct {
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type ReposDeleteResponse struct {
	ContentType                         string
	StatusCode                          int64
	BasicError                          *shared.BasicError
	ReposDelete403ApplicationJSONObject *ReposDelete403ApplicationJSON
}
