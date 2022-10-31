package operations

import (
	"openapi/pkg/models/shared"
)

type IssuesLockPathParams struct {
	IssueNumber int64  `pathParam:"style=simple,explode=false,name=issue_number"`
	Owner       string `pathParam:"style=simple,explode=false,name=owner"`
	Repo        string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesLockRequestBodyLockReasonEnum string

const (
	IssuesLockRequestBodyLockReasonEnumOffTopic  IssuesLockRequestBodyLockReasonEnum = "off-topic"
	IssuesLockRequestBodyLockReasonEnumTooHeated IssuesLockRequestBodyLockReasonEnum = "too heated"
	IssuesLockRequestBodyLockReasonEnumResolved  IssuesLockRequestBodyLockReasonEnum = "resolved"
	IssuesLockRequestBodyLockReasonEnumSpam      IssuesLockRequestBodyLockReasonEnum = "spam"
)

type IssuesLockRequestBody struct {
	LockReason *IssuesLockRequestBodyLockReasonEnum `json:"lock_reason,omitempty"`
}

type IssuesLockRequest struct {
	PathParams IssuesLockPathParams
	Request    *IssuesLockRequestBody `request:"mediaType=application/json"`
}

type IssuesLockResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	ValidationError *shared.ValidationError
}
