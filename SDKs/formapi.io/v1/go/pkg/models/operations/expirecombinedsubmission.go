package operations

import (
	"openapi/pkg/models/shared"
)

type ExpireCombinedSubmissionPathParams struct {
	CombinedSubmissionID string `pathParam:"style=simple,explode=false,name=combined_submission_id"`
}

type ExpireCombinedSubmissionSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type ExpireCombinedSubmissionRequest struct {
	PathParams ExpireCombinedSubmissionPathParams
	Security   ExpireCombinedSubmissionSecurity
}

type ExpireCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnum string

const (
	ExpireCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnumSubmission         ExpireCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnum = "submission"
	ExpireCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnumCombinedSubmission ExpireCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnum = "combined_submission"
	ExpireCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnumTemplate           ExpireCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnum = "template"
	ExpireCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnumCustomFile         ExpireCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnum = "custom_file"
)

type ExpireCombinedSubmission200ApplicationJSONSourcePdfs1 struct {
	ID   string                                                        `json:"id"`
	Type ExpireCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnum `json:"type"`
}

type ExpireCombinedSubmission200ApplicationJSONSourcePdfs2TypeEnum string

const (
	ExpireCombinedSubmission200ApplicationJSONSourcePdfs2TypeEnumURL ExpireCombinedSubmission200ApplicationJSONSourcePdfs2TypeEnum = "url"
)

type ExpireCombinedSubmission200ApplicationJSONSourcePdfs2 struct {
	Type ExpireCombinedSubmission200ApplicationJSONSourcePdfs2TypeEnum `json:"type"`
	URL  string                                                        `json:"url"`
}

type ExpireCombinedSubmission200ApplicationJSONStateEnum string

const (
	ExpireCombinedSubmission200ApplicationJSONStateEnumPending   ExpireCombinedSubmission200ApplicationJSONStateEnum = "pending"
	ExpireCombinedSubmission200ApplicationJSONStateEnumProcessed ExpireCombinedSubmission200ApplicationJSONStateEnum = "processed"
	ExpireCombinedSubmission200ApplicationJSONStateEnumError     ExpireCombinedSubmission200ApplicationJSONStateEnum = "error"
)

type ExpireCombinedSubmission200ApplicationJSONCombinedSubmission struct {
	Actions       []shared.CombinedSubmissionAction                   `json:"actions,omitempty"`
	DownloadURL   *string                                             `json:"download_url,omitempty"`
	Expired       bool                                                `json:"expired"`
	ExpiresAt     *string                                             `json:"expires_at,omitempty"`
	ID            string                                              `json:"id"`
	Metadata      map[string]interface{}                              `json:"metadata,omitempty"`
	PdfHash       *string                                             `json:"pdf_hash,omitempty"`
	SourcePdfs    []interface{}                                       `json:"source_pdfs"`
	State         ExpireCombinedSubmission200ApplicationJSONStateEnum `json:"state"`
	SubmissionIds []string                                            `json:"submission_ids"`
}

type ExpireCombinedSubmissionResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	CombinedSubmission  *ExpireCombinedSubmission200ApplicationJSONCombinedSubmission
	Error               *shared.Error
}
