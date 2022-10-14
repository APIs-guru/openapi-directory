package operations

import (
	"openapi/pkg/models/shared"
)

type GetCombinedSubmissionPathParams struct {
	CombinedSubmissionID string `pathParam:"style=simple,explode=false,name=combined_submission_id"`
}

type GetCombinedSubmissionSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type GetCombinedSubmissionRequest struct {
	PathParams GetCombinedSubmissionPathParams
	Security   GetCombinedSubmissionSecurity
}

type GetCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnum string

const (
	GetCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnumSubmission         GetCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnum = "submission"
	GetCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnumCombinedSubmission GetCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnum = "combined_submission"
	GetCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnumTemplate           GetCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnum = "template"
	GetCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnumCustomFile         GetCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnum = "custom_file"
)

type GetCombinedSubmission200ApplicationJSONSourcePdfs1 struct {
	ID   string                                                     `json:"id"`
	Type GetCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnum `json:"type"`
}

type GetCombinedSubmission200ApplicationJSONSourcePdfs2TypeEnum string

const (
	GetCombinedSubmission200ApplicationJSONSourcePdfs2TypeEnumURL GetCombinedSubmission200ApplicationJSONSourcePdfs2TypeEnum = "url"
)

type GetCombinedSubmission200ApplicationJSONSourcePdfs2 struct {
	Type GetCombinedSubmission200ApplicationJSONSourcePdfs2TypeEnum `json:"type"`
	URL  string                                                     `json:"url"`
}

type GetCombinedSubmission200ApplicationJSONStateEnum string

const (
	GetCombinedSubmission200ApplicationJSONStateEnumPending   GetCombinedSubmission200ApplicationJSONStateEnum = "pending"
	GetCombinedSubmission200ApplicationJSONStateEnumProcessed GetCombinedSubmission200ApplicationJSONStateEnum = "processed"
	GetCombinedSubmission200ApplicationJSONStateEnumError     GetCombinedSubmission200ApplicationJSONStateEnum = "error"
)

type GetCombinedSubmission200ApplicationJSONCombinedSubmission struct {
	Actions       []shared.CombinedSubmissionAction                `json:"actions,omitempty"`
	DownloadURL   *string                                          `json:"download_url,omitempty"`
	Expired       bool                                             `json:"expired"`
	ExpiresAt     *string                                          `json:"expires_at,omitempty"`
	ID            string                                           `json:"id"`
	Metadata      map[string]interface{}                           `json:"metadata,omitempty"`
	PdfHash       *string                                          `json:"pdf_hash,omitempty"`
	SourcePdfs    []interface{}                                    `json:"source_pdfs"`
	State         GetCombinedSubmission200ApplicationJSONStateEnum `json:"state"`
	SubmissionIds []string                                         `json:"submission_ids"`
}

type GetCombinedSubmissionResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	CombinedSubmission  *GetCombinedSubmission200ApplicationJSONCombinedSubmission
	Error               *shared.Error
}
