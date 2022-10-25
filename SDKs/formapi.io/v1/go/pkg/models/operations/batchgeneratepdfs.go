package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest struct {
	CSS        *string                `json:"css,omitempty"`
	Data       map[string]interface{} `json:"data"`
	HTML       *string                `json:"html,omitempty"`
	Metadata   map[string]interface{} `json:"metadata,omitempty"`
	TemplateID string                 `json:"template_id"`
	Test       *bool                  `json:"test,omitempty"`
}

type BatchGeneratePdfsSubmissionBatchData struct {
	Metadata    map[string]interface{}                                           `json:"metadata,omitempty"`
	Submissions []BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest `json:"submissions"`
	TemplateID  *string                                                          `json:"template_id,omitempty"`
	Test        *bool                                                            `json:"test,omitempty"`
}

type BatchGeneratePdfsSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type BatchGeneratePdfsRequest struct {
	Request  BatchGeneratePdfsSubmissionBatchData `request:"mediaType=application/json"`
	Security BatchGeneratePdfsSecurity
}

type BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum string

const (
	BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnumSuccess BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum = "success"
	BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnumError   BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum = "error"
)

type BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum string

const (
	BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnumPending   BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum = "pending"
	BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnumProcessed BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum = "processed"
	BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnumError     BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum = "error"
)

type BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch struct {
	CompletionPercentage int64                                                                  `json:"completion_percentage"`
	ErrorCount           int64                                                                  `json:"error_count"`
	ID                   string                                                                 `json:"id"`
	Metadata             map[string]interface{}                                                 `json:"metadata"`
	PendingCount         int64                                                                  `json:"pending_count"`
	ProcessedAt          string                                                                 `json:"processed_at"`
	State                BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum `json:"state"`
	Submissions          []shared.Submission                                                    `json:"submissions,omitempty"`
	TotalCount           int64                                                                  `json:"total_count"`
}

type BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum string

const (
	BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnumSuccess          BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum = "success"
	BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnumError            BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum = "error"
	BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnumValidButNotSaved BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum = "valid_but_not_saved"
)

type BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse struct {
	Errors     []string                                                                                         `json:"errors,omitempty"`
	Status     BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum `json:"status"`
	Submission *shared.Submission                                                                               `json:"submission,omitempty"`
}

type BatchGeneratePdfsCreateSubmissionBatchResponse struct {
	Error           *string                                                                                  `json:"error,omitempty"`
	Errors          []string                                                                                 `json:"errors,omitempty"`
	Status          BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum                                 `json:"status"`
	SubmissionBatch BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch                            `json:"submission_batch"`
	Submissions     []BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse `json:"submissions"`
}

type BatchGeneratePdfsResponse struct {
	ContentType                   string
	StatusCode                    int64
	AuthenticationError           *shared.AuthenticationError
	CreateSubmissionBatchResponse *BatchGeneratePdfsCreateSubmissionBatchResponse
	Error                         *shared.Error
}
