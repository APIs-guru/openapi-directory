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
	CheckoutURI *string    `json:"checkout_uri"`
	CommitSha   string     `json:"commit_sha"`
	Ref         string     `json:"ref"`
	Sarif       string     `json:"sarif"`
	StartedAt   *time.Time `json:"started_at"`
	ToolName    *string    `json:"tool_name"`
}

type CodeScanningUploadSarifRequest struct {
	PathParams CodeScanningUploadSarifPathParams
	Request    *CodeScanningUploadSarifRequestBody `request:"mediaType=application/json"`
}

type CodeScanningUploadSarif503ApplicationJSON struct {
	Code             *string `json:"code"`
	DocumentationURL *string `json:"documentation_url"`
	Message          *string `json:"message"`
}

type CodeScanningUploadSarifResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	BasicError                                      *shared.BasicError
	CodeScanningSarifsReceipt                       *shared.CodeScanningSarifsReceipt
	CodeScanningUploadSarif503ApplicationJSONObject *CodeScanningUploadSarif503ApplicationJSON
}
