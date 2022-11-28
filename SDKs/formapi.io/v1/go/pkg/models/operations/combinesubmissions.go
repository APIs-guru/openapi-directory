package operations

import (
	"openapi/pkg/models/shared"
)

type CombineSubmissionsCombinedSubmissionData struct {
	ExpiresIn     *int64                 `json:"expires_in,omitempty"`
	Metadata      map[string]interface{} `json:"metadata,omitempty"`
	SubmissionIds []string               `json:"submission_ids"`
	Test          *bool                  `json:"test,omitempty"`
}

type CombineSubmissionsSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum string

const (
	CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnumSubmission         CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum = "submission"
	CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnumCombinedSubmission CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum = "combined_submission"
	CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnumTemplate           CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum = "template"
	CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnumCustomFile         CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum = "custom_file"
)

type CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1 struct {
	ID   string                                                                                  `json:"id"`
	Type CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum `json:"type"`
}

type CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum string

const (
	CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnumURL CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum = "url"
)

type CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2 struct {
	Type CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum `json:"type"`
	URL  string                                                                                  `json:"url"`
}

type CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum string

const (
	CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnumPending   CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum = "pending"
	CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnumProcessed CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum = "processed"
	CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnumError     CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum = "error"
)

type CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission struct {
	Actions       []shared.CombinedSubmissionAction                                             `json:"actions,omitempty"`
	DownloadURL   *string                                                                       `json:"download_url,omitempty"`
	Expired       bool                                                                          `json:"expired"`
	ExpiresAt     *string                                                                       `json:"expires_at,omitempty"`
	ID            string                                                                        `json:"id"`
	Metadata      map[string]interface{}                                                        `json:"metadata,omitempty"`
	PdfHash       *string                                                                       `json:"pdf_hash,omitempty"`
	SourcePdfs    []interface{}                                                                 `json:"source_pdfs"`
	State         CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum `json:"state"`
	SubmissionIds []string                                                                      `json:"submission_ids"`
}

type CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum string

const (
	CombineSubmissionsCreateCombinedSubmissionResponseStatusEnumSuccess CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum = "success"
	CombineSubmissionsCreateCombinedSubmissionResponseStatusEnumError   CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum = "error"
)

type CombineSubmissionsCreateCombinedSubmissionResponse struct {
	CombinedSubmission CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission `json:"combined_submission"`
	Errors             []string                                                             `json:"errors,omitempty"`
	Status             CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum         `json:"status"`
}

type CombineSubmissionsRequest struct {
	Request  CombineSubmissionsCombinedSubmissionData `request:"mediaType=application/json"`
	Security CombineSubmissionsSecurity
}

type CombineSubmissionsResponse struct {
	ContentType                      string
	StatusCode                       int64
	AuthenticationError              *shared.AuthenticationError
	CreateCombinedSubmissionResponse *CombineSubmissionsCreateCombinedSubmissionResponse
	Error                            *shared.Error
	InvalidRequest                   *shared.InvalidRequest
}
