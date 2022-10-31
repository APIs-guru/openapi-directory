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

type GetSubmissionBatchSubmissionBatchStateEnum string

const (
	GetSubmissionBatchSubmissionBatchStateEnumPending   GetSubmissionBatchSubmissionBatchStateEnum = "pending"
	GetSubmissionBatchSubmissionBatchStateEnumProcessed GetSubmissionBatchSubmissionBatchStateEnum = "processed"
	GetSubmissionBatchSubmissionBatchStateEnumError     GetSubmissionBatchSubmissionBatchStateEnum = "error"
)

type GetSubmissionBatchSubmissionBatch struct {
	CompletionPercentage int64                                      `json:"completion_percentage"`
	ErrorCount           int64                                      `json:"error_count"`
	ID                   string                                     `json:"id"`
	Metadata             map[string]interface{}                     `json:"metadata"`
	PendingCount         int64                                      `json:"pending_count"`
	ProcessedAt          string                                     `json:"processed_at"`
	State                GetSubmissionBatchSubmissionBatchStateEnum `json:"state"`
	Submissions          []shared.Submission                        `json:"submissions,omitempty"`
	TotalCount           int64                                      `json:"total_count"`
}

type GetSubmissionBatchResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	Error               *shared.Error
	SubmissionBatch     *GetSubmissionBatchSubmissionBatch
}
