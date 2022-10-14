package operations

import (
	"openapi/pkg/models/shared"
)

type CombinePdfsRequestBodySourcePdfs1TypeEnum string

const (
	CombinePdfsRequestBodySourcePdfs1TypeEnumSubmission         CombinePdfsRequestBodySourcePdfs1TypeEnum = "submission"
	CombinePdfsRequestBodySourcePdfs1TypeEnumCombinedSubmission CombinePdfsRequestBodySourcePdfs1TypeEnum = "combined_submission"
	CombinePdfsRequestBodySourcePdfs1TypeEnumTemplate           CombinePdfsRequestBodySourcePdfs1TypeEnum = "template"
	CombinePdfsRequestBodySourcePdfs1TypeEnumCustomFile         CombinePdfsRequestBodySourcePdfs1TypeEnum = "custom_file"
)

type CombinePdfsRequestBodySourcePdfs1 struct {
	ID   string                                    `json:"id"`
	Type CombinePdfsRequestBodySourcePdfs1TypeEnum `json:"type"`
}

type CombinePdfsRequestBodySourcePdfs2TypeEnum string

const (
	CombinePdfsRequestBodySourcePdfs2TypeEnumURL CombinePdfsRequestBodySourcePdfs2TypeEnum = "url"
)

type CombinePdfsRequestBodySourcePdfs2 struct {
	Type CombinePdfsRequestBodySourcePdfs2TypeEnum `json:"type"`
	URL  string                                    `json:"url"`
}

type CombinePdfsRequestBodyCombinePdfsData struct {
	DeleteCustomFiles *bool                  `json:"delete_custom_files,omitempty"`
	ExpiresIn         *int64                 `json:"expires_in,omitempty"`
	Metadata          map[string]interface{} `json:"metadata,omitempty"`
	SourcePdfs        []interface{}          `json:"source_pdfs"`
	Test              *bool                  `json:"test,omitempty"`
}

type CombinePdfsSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type CombinePdfsRequest struct {
	Request  CombinePdfsRequestBodyCombinePdfsData `request:"mediaType=application/json"`
	Security CombinePdfsSecurity
}

type CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnum string

const (
	CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnumSubmission         CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnum = "submission"
	CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnumCombinedSubmission CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnum = "combined_submission"
	CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnumTemplate           CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnum = "template"
	CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnumCustomFile         CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnum = "custom_file"
)

type CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs1 struct {
	ID   string                                                             `json:"id"`
	Type CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnum `json:"type"`
}

type CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs2TypeEnum string

const (
	CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs2TypeEnumURL CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs2TypeEnum = "url"
)

type CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs2 struct {
	Type CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs2TypeEnum `json:"type"`
	URL  string                                                             `json:"url"`
}

type CombinePdfs201ApplicationJSONCombinedSubmissionStateEnum string

const (
	CombinePdfs201ApplicationJSONCombinedSubmissionStateEnumPending   CombinePdfs201ApplicationJSONCombinedSubmissionStateEnum = "pending"
	CombinePdfs201ApplicationJSONCombinedSubmissionStateEnumProcessed CombinePdfs201ApplicationJSONCombinedSubmissionStateEnum = "processed"
	CombinePdfs201ApplicationJSONCombinedSubmissionStateEnumError     CombinePdfs201ApplicationJSONCombinedSubmissionStateEnum = "error"
)

type CombinePdfs201ApplicationJSONCombinedSubmissionCombinedSubmission struct {
	Actions       []shared.CombinedSubmissionAction                        `json:"actions,omitempty"`
	DownloadURL   *string                                                  `json:"download_url,omitempty"`
	Expired       bool                                                     `json:"expired"`
	ExpiresAt     *string                                                  `json:"expires_at,omitempty"`
	ID            string                                                   `json:"id"`
	Metadata      map[string]interface{}                                   `json:"metadata,omitempty"`
	PdfHash       *string                                                  `json:"pdf_hash,omitempty"`
	SourcePdfs    []interface{}                                            `json:"source_pdfs"`
	State         CombinePdfs201ApplicationJSONCombinedSubmissionStateEnum `json:"state"`
	SubmissionIds []string                                                 `json:"submission_ids"`
}

type CombinePdfs201ApplicationJSONStatusEnum string

const (
	CombinePdfs201ApplicationJSONStatusEnumSuccess CombinePdfs201ApplicationJSONStatusEnum = "success"
	CombinePdfs201ApplicationJSONStatusEnumError   CombinePdfs201ApplicationJSONStatusEnum = "error"
)

type CombinePdfs201ApplicationJSONCreateCombinedSubmissionResponse struct {
	CombinedSubmission CombinePdfs201ApplicationJSONCombinedSubmissionCombinedSubmission `json:"combined_submission"`
	Errors             []string                                                          `json:"errors,omitempty"`
	Status             CombinePdfs201ApplicationJSONStatusEnum                           `json:"status"`
}

type CombinePdfsResponse struct {
	ContentType                      string
	StatusCode                       int64
	AuthenticationError              *shared.AuthenticationError
	CreateCombinedSubmissionResponse *CombinePdfs201ApplicationJSONCreateCombinedSubmissionResponse
	Error                            *shared.Error
	InvalidRequest                   *shared.InvalidRequest
}
