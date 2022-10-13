package operations

import (
	"openapi/pkg/models/shared"
)

type CombineSubmissionsRequestBodyCombinedSubmissionData struct {
	ExpiresIn     *int64                 `json:"expires_in"`
	Metadata      map[string]interface{} `json:"metadata"`
	SubmissionIds []string               `json:"submission_ids"`
	Test          *bool                  `json:"test"`
}

type CombineSubmissionsSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type CombineSubmissionsRequest struct {
	Request  CombineSubmissionsRequestBodyCombinedSubmissionData `request:"mediaType=application/json"`
	Security CombineSubmissionsSecurity
}

type CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnum string

const (
	CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnumSubmission         CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnum = "submission"
	CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnumCombinedSubmission CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnum = "combined_submission"
	CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnumTemplate           CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnum = "template"
	CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnumCustomFile         CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnum = "custom_file"
)

type CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs1 struct {
	ID   string                                                                    `json:"id"`
	Type CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnum `json:"type"`
}

type CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs2TypeEnum string

const (
	CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs2TypeEnumURL CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs2TypeEnum = "url"
)

type CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs2 struct {
	Type CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs2TypeEnum `json:"type"`
	URL  string                                                                    `json:"url"`
}

type CombineSubmissions201ApplicationJSONCombinedSubmissionStateEnum string

const (
	CombineSubmissions201ApplicationJSONCombinedSubmissionStateEnumPending   CombineSubmissions201ApplicationJSONCombinedSubmissionStateEnum = "pending"
	CombineSubmissions201ApplicationJSONCombinedSubmissionStateEnumProcessed CombineSubmissions201ApplicationJSONCombinedSubmissionStateEnum = "processed"
	CombineSubmissions201ApplicationJSONCombinedSubmissionStateEnumError     CombineSubmissions201ApplicationJSONCombinedSubmissionStateEnum = "error"
)

type CombineSubmissions201ApplicationJSONCombinedSubmissionCombinedSubmission struct {
	Actions       []shared.CombinedSubmissionAction                               `json:"actions"`
	DownloadURL   *string                                                         `json:"download_url"`
	Expired       bool                                                            `json:"expired"`
	ExpiresAt     *string                                                         `json:"expires_at"`
	ID            string                                                          `json:"id"`
	Metadata      map[string]interface{}                                          `json:"metadata"`
	PdfHash       *string                                                         `json:"pdf_hash"`
	SourcePdfs    []interface{}                                                   `json:"source_pdfs"`
	State         CombineSubmissions201ApplicationJSONCombinedSubmissionStateEnum `json:"state"`
	SubmissionIds []string                                                        `json:"submission_ids"`
}

type CombineSubmissions201ApplicationJSONStatusEnum string

const (
	CombineSubmissions201ApplicationJSONStatusEnumSuccess CombineSubmissions201ApplicationJSONStatusEnum = "success"
	CombineSubmissions201ApplicationJSONStatusEnumError   CombineSubmissions201ApplicationJSONStatusEnum = "error"
)

type CombineSubmissions201ApplicationJSONCreateCombinedSubmissionResponse struct {
	CombinedSubmission CombineSubmissions201ApplicationJSONCombinedSubmissionCombinedSubmission `json:"combined_submission"`
	Errors             []string                                                                 `json:"errors"`
	Status             CombineSubmissions201ApplicationJSONStatusEnum                           `json:"status"`
}

type CombineSubmissionsResponse struct {
	ContentType                      string
	StatusCode                       int64
	AuthenticationError              *shared.AuthenticationError
	CreateCombinedSubmissionResponse *CombineSubmissions201ApplicationJSONCreateCombinedSubmissionResponse
	Error                            *shared.Error
	InvalidRequest                   *shared.InvalidRequest
}
