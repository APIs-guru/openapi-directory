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

type GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum string

const (
	GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnumSubmission         GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum = "submission"
	GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnumCombinedSubmission GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum = "combined_submission"
	GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnumTemplate           GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum = "template"
	GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnumCustomFile         GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum = "custom_file"
)

type GetCombinedSubmissionCombinedSubmissionSourcePdfs1 struct {
	ID   string                                                     `json:"id"`
	Type GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum `json:"type"`
}

type GetCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum string

const (
	GetCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnumURL GetCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum = "url"
)

type GetCombinedSubmissionCombinedSubmissionSourcePdfs2 struct {
	Type GetCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum `json:"type"`
	URL  string                                                     `json:"url"`
}

type GetCombinedSubmissionCombinedSubmissionStateEnum string

const (
	GetCombinedSubmissionCombinedSubmissionStateEnumPending   GetCombinedSubmissionCombinedSubmissionStateEnum = "pending"
	GetCombinedSubmissionCombinedSubmissionStateEnumProcessed GetCombinedSubmissionCombinedSubmissionStateEnum = "processed"
	GetCombinedSubmissionCombinedSubmissionStateEnumError     GetCombinedSubmissionCombinedSubmissionStateEnum = "error"
)

type GetCombinedSubmissionCombinedSubmission struct {
	Actions       []shared.CombinedSubmissionAction                `json:"actions,omitempty"`
	DownloadURL   *string                                          `json:"download_url,omitempty"`
	Expired       bool                                             `json:"expired"`
	ExpiresAt     *string                                          `json:"expires_at,omitempty"`
	ID            string                                           `json:"id"`
	Metadata      map[string]interface{}                           `json:"metadata,omitempty"`
	PdfHash       *string                                          `json:"pdf_hash,omitempty"`
	SourcePdfs    []interface{}                                    `json:"source_pdfs"`
	State         GetCombinedSubmissionCombinedSubmissionStateEnum `json:"state"`
	SubmissionIds []string                                         `json:"submission_ids"`
}

type GetCombinedSubmissionResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	CombinedSubmission  *GetCombinedSubmissionCombinedSubmission
	Error               *shared.Error
}
