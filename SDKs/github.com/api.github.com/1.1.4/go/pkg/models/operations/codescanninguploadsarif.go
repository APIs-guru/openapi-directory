package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CodeScanningUploadSarifPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type CodeScanningUploadSarifRequestBody struct {
	CheckoutURI *string    `json:"checkout_uri,omitempty"`
	CommitSha   string     `json:"commit_sha"`
	Ref         string     `json:"ref"`
	Sarif       string     `json:"sarif"`
	StartedAt   *time.Time `json:"started_at,omitempty"`
	ToolName    *string    `json:"tool_name,omitempty"`
}

type CodeScanningUploadSarif503ApplicationJSON struct {
	Code             *string `json:"code,omitempty"`
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type CodeScanningUploadSarifRequest struct {
	PathParams CodeScanningUploadSarifPathParams
	Request    *CodeScanningUploadSarifRequestBody `request:"mediaType=application/json"`
}

type CodeScanningUploadSarifResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	BasicError                                      *shared.BasicError
	CodeScanningSarifsReceipt                       *shared.CodeScanningSarifsReceipt
	CodeScanningUploadSarif503ApplicationJSONObject *CodeScanningUploadSarif503ApplicationJSON
}
