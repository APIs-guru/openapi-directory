package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubmissionBatchPathParams struct {
	SubmissionBatchID string `pathParam:"style=simple,explode=false,name=submission_batch_id"`
}

type GetSubmissionBatchQueryParams struct {
	IncludeSubmissions *bool `queryParam:"style=form,explode=true,name=include_submissions"`
}

type GetSubmissionBatchSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type GetSubmissionBatchRequest struct {
	PathParams  GetSubmissionBatchPathParams
	QueryParams GetSubmissionBatchQueryParams
	Security    GetSubmissionBatchSecurity
}

type GetSubmissionBatch200ApplicationJSONStateEnum string

const (
	GetSubmissionBatch200ApplicationJSONStateEnumPending   GetSubmissionBatch200ApplicationJSONStateEnum = "pending"
	GetSubmissionBatch200ApplicationJSONStateEnumProcessed GetSubmissionBatch200ApplicationJSONStateEnum = "processed"
	GetSubmissionBatch200ApplicationJSONStateEnumError     GetSubmissionBatch200ApplicationJSONStateEnum = "error"
)

type GetSubmissionBatch200ApplicationJSONSubmissionBatch struct {
	CompletionPercentage int64                                         `json:"completion_percentage"`
	ErrorCount           int64                                         `json:"error_count"`
	ID                   string                                        `json:"id"`
	Metadata             map[string]interface{}                        `json:"metadata"`
	PendingCount         int64                                         `json:"pending_count"`
	ProcessedAt          string                                        `json:"processed_at"`
	State                GetSubmissionBatch200ApplicationJSONStateEnum `json:"state"`
	Submissions          []shared.Submission                           `json:"submissions,omitempty"`
	TotalCount           int64                                         `json:"total_count"`
}

type GetSubmissionBatchResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	Error               *shared.Error
	SubmissionBatch     *GetSubmissionBatch200ApplicationJSONSubmissionBatch
}
