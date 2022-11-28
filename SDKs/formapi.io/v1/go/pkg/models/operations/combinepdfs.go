package operations

import (
	"openapi/pkg/models/shared"
)

type CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum string

const (
	CombinePdfsCombinePdfsDataSourcePdfs1TypeEnumSubmission         CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum = "submission"
	CombinePdfsCombinePdfsDataSourcePdfs1TypeEnumCombinedSubmission CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum = "combined_submission"
	CombinePdfsCombinePdfsDataSourcePdfs1TypeEnumTemplate           CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum = "template"
	CombinePdfsCombinePdfsDataSourcePdfs1TypeEnumCustomFile         CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum = "custom_file"
)

type CombinePdfsCombinePdfsDataSourcePdfs1 struct {
	ID   string                                        `json:"id"`
	Type CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum `json:"type"`
}

type CombinePdfsCombinePdfsDataSourcePdfs2TypeEnum string

const (
	CombinePdfsCombinePdfsDataSourcePdfs2TypeEnumURL CombinePdfsCombinePdfsDataSourcePdfs2TypeEnum = "url"
)

type CombinePdfsCombinePdfsDataSourcePdfs2 struct {
	Type CombinePdfsCombinePdfsDataSourcePdfs2TypeEnum `json:"type"`
	URL  string                                        `json:"url"`
}

type CombinePdfsCombinePdfsData struct {
	DeleteCustomFiles *bool                  `json:"delete_custom_files,omitempty"`
	ExpiresIn         *int64                 `json:"expires_in,omitempty"`
	Metadata          map[string]interface{} `json:"metadata,omitempty"`
	SourcePdfs        []interface{}          `json:"source_pdfs"`
	Test              *bool                  `json:"test,omitempty"`
}

type CombinePdfsSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum string

const (
	CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnumSubmission         CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum = "submission"
	CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnumCombinedSubmission CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum = "combined_submission"
	CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnumTemplate           CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum = "template"
	CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnumCustomFile         CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum = "custom_file"
)

type CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1 struct {
	ID   string                                                                           `json:"id"`
	Type CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum `json:"type"`
}

type CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum string

const (
	CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnumURL CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum = "url"
)

type CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2 struct {
	Type CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum `json:"type"`
	URL  string                                                                           `json:"url"`
}

type CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum string

const (
	CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnumPending   CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum = "pending"
	CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnumProcessed CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum = "processed"
	CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnumError     CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum = "error"
)

type CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission struct {
	Actions       []shared.CombinedSubmissionAction                                      `json:"actions,omitempty"`
	DownloadURL   *string                                                                `json:"download_url,omitempty"`
	Expired       bool                                                                   `json:"expired"`
	ExpiresAt     *string                                                                `json:"expires_at,omitempty"`
	ID            string                                                                 `json:"id"`
	Metadata      map[string]interface{}                                                 `json:"metadata,omitempty"`
	PdfHash       *string                                                                `json:"pdf_hash,omitempty"`
	SourcePdfs    []interface{}                                                          `json:"source_pdfs"`
	State         CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum `json:"state"`
	SubmissionIds []string                                                               `json:"submission_ids"`
}

type CombinePdfsCreateCombinedSubmissionResponseStatusEnum string

const (
	CombinePdfsCreateCombinedSubmissionResponseStatusEnumSuccess CombinePdfsCreateCombinedSubmissionResponseStatusEnum = "success"
	CombinePdfsCreateCombinedSubmissionResponseStatusEnumError   CombinePdfsCreateCombinedSubmissionResponseStatusEnum = "error"
)

type CombinePdfsCreateCombinedSubmissionResponse struct {
	CombinedSubmission CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission `json:"combined_submission"`
	Errors             []string                                                      `json:"errors,omitempty"`
	Status             CombinePdfsCreateCombinedSubmissionResponseStatusEnum         `json:"status"`
}

type CombinePdfsRequest struct {
	Request  CombinePdfsCombinePdfsData `request:"mediaType=application/json"`
	Security CombinePdfsSecurity
}

type CombinePdfsResponse struct {
	ContentType                      string
	StatusCode                       int64
	AuthenticationError              *shared.AuthenticationError
	CreateCombinedSubmissionResponse *CombinePdfsCreateCombinedSubmissionResponse
	Error                            *shared.Error
	InvalidRequest                   *shared.InvalidRequest
}
