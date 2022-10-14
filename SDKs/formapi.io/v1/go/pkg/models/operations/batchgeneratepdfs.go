package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGeneratePdfsRequestBodySubmissionsSubmissionDataBatchRequest struct {
	CSS        *string                `json:"css,omitempty"`
	Data       map[string]interface{} `json:"data"`
	HTML       *string                `json:"html,omitempty"`
	Metadata   map[string]interface{} `json:"metadata,omitempty"`
	TemplateID string                 `json:"template_id"`
	Test       *bool                  `json:"test,omitempty"`
}

type BatchGeneratePdfsRequestBodySubmissionBatchData struct {
	Metadata    map[string]interface{}                                              `json:"metadata,omitempty"`
	Submissions []BatchGeneratePdfsRequestBodySubmissionsSubmissionDataBatchRequest `json:"submissions"`
	TemplateID  *string                                                             `json:"template_id,omitempty"`
	Test        *bool                                                               `json:"test,omitempty"`
}

type BatchGeneratePdfsSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type BatchGeneratePdfsRequest struct {
	Request  BatchGeneratePdfsRequestBodySubmissionBatchData `request:"mediaType=application/json"`
	Security BatchGeneratePdfsSecurity
}

type BatchGeneratePdfs200ApplicationJSONStatusEnum string

const (
	BatchGeneratePdfs200ApplicationJSONStatusEnumSuccess BatchGeneratePdfs200ApplicationJSONStatusEnum = "success"
	BatchGeneratePdfs200ApplicationJSONStatusEnumError   BatchGeneratePdfs200ApplicationJSONStatusEnum = "error"
)

type BatchGeneratePdfs200ApplicationJSONSubmissionBatchStateEnum string

const (
	BatchGeneratePdfs200ApplicationJSONSubmissionBatchStateEnumPending   BatchGeneratePdfs200ApplicationJSONSubmissionBatchStateEnum = "pending"
	BatchGeneratePdfs200ApplicationJSONSubmissionBatchStateEnumProcessed BatchGeneratePdfs200ApplicationJSONSubmissionBatchStateEnum = "processed"
	BatchGeneratePdfs200ApplicationJSONSubmissionBatchStateEnumError     BatchGeneratePdfs200ApplicationJSONSubmissionBatchStateEnum = "error"
)

type BatchGeneratePdfs200ApplicationJSONSubmissionBatchSubmissionBatch struct {
	CompletionPercentage int64                                                       `json:"completion_percentage"`
	ErrorCount           int64                                                       `json:"error_count"`
	ID                   string                                                      `json:"id"`
	Metadata             map[string]interface{}                                      `json:"metadata"`
	PendingCount         int64                                                       `json:"pending_count"`
	ProcessedAt          string                                                      `json:"processed_at"`
	State                BatchGeneratePdfs200ApplicationJSONSubmissionBatchStateEnum `json:"state"`
	Submissions          []shared.Submission                                         `json:"submissions,omitempty"`
	TotalCount           int64                                                       `json:"total_count"`
}

type BatchGeneratePdfs200ApplicationJSONSubmissionsStatusEnum string

const (
	BatchGeneratePdfs200ApplicationJSONSubmissionsStatusEnumSuccess          BatchGeneratePdfs200ApplicationJSONSubmissionsStatusEnum = "success"
	BatchGeneratePdfs200ApplicationJSONSubmissionsStatusEnumError            BatchGeneratePdfs200ApplicationJSONSubmissionsStatusEnum = "error"
	BatchGeneratePdfs200ApplicationJSONSubmissionsStatusEnumValidButNotSaved BatchGeneratePdfs200ApplicationJSONSubmissionsStatusEnum = "valid_but_not_saved"
)

type BatchGeneratePdfs200ApplicationJSONSubmissionsCreateSubmissionBatchSubmissionsResponse struct {
	Errors     []string                                                 `json:"errors,omitempty"`
	Status     BatchGeneratePdfs200ApplicationJSONSubmissionsStatusEnum `json:"status"`
	Submission *shared.Submission                                       `json:"submission,omitempty"`
}

type BatchGeneratePdfs200ApplicationJSONCreateSubmissionBatchResponse struct {
	Error           *string                                                                                  `json:"error,omitempty"`
	Errors          []string                                                                                 `json:"errors,omitempty"`
	Status          BatchGeneratePdfs200ApplicationJSONStatusEnum                                            `json:"status"`
	SubmissionBatch BatchGeneratePdfs200ApplicationJSONSubmissionBatchSubmissionBatch                        `json:"submission_batch"`
	Submissions     []BatchGeneratePdfs200ApplicationJSONSubmissionsCreateSubmissionBatchSubmissionsResponse `json:"submissions"`
}

type BatchGeneratePdfsResponse struct {
	ContentType                   string
	StatusCode                    int64
	AuthenticationError           *shared.AuthenticationError
	CreateSubmissionBatchResponse *BatchGeneratePdfs200ApplicationJSONCreateSubmissionBatchResponse
	Error                         *shared.Error
}
