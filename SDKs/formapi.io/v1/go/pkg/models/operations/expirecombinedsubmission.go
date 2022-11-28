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

type ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum string

const (
	ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnumSubmission         ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum = "submission"
	ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnumCombinedSubmission ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum = "combined_submission"
	ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnumTemplate           ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum = "template"
	ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnumCustomFile         ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum = "custom_file"
)

type ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1 struct {
	ID   string                                                        `json:"id"`
	Type ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum `json:"type"`
}

type ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum string

const (
	ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnumURL ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum = "url"
)

type ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2 struct {
	Type ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum `json:"type"`
	URL  string                                                        `json:"url"`
}

type ExpireCombinedSubmissionCombinedSubmissionStateEnum string

const (
	ExpireCombinedSubmissionCombinedSubmissionStateEnumPending   ExpireCombinedSubmissionCombinedSubmissionStateEnum = "pending"
	ExpireCombinedSubmissionCombinedSubmissionStateEnumProcessed ExpireCombinedSubmissionCombinedSubmissionStateEnum = "processed"
	ExpireCombinedSubmissionCombinedSubmissionStateEnumError     ExpireCombinedSubmissionCombinedSubmissionStateEnum = "error"
)

type ExpireCombinedSubmissionCombinedSubmission struct {
	Actions       []shared.CombinedSubmissionAction                   `json:"actions,omitempty"`
	DownloadURL   *string                                             `json:"download_url,omitempty"`
	Expired       bool                                                `json:"expired"`
	ExpiresAt     *string                                             `json:"expires_at,omitempty"`
	ID            string                                              `json:"id"`
	Metadata      map[string]interface{}                              `json:"metadata,omitempty"`
	PdfHash       *string                                             `json:"pdf_hash,omitempty"`
	SourcePdfs    []interface{}                                       `json:"source_pdfs"`
	State         ExpireCombinedSubmissionCombinedSubmissionStateEnum `json:"state"`
	SubmissionIds []string                                            `json:"submission_ids"`
}

type ExpireCombinedSubmissionRequest struct {
	PathParams ExpireCombinedSubmissionPathParams
	Security   ExpireCombinedSubmissionSecurity
}

type ExpireCombinedSubmissionResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	CombinedSubmission  *ExpireCombinedSubmissionCombinedSubmission
	Error               *shared.Error
}
