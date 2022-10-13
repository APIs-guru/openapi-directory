package operations

import (
	"openapi/pkg/models/shared"
)

type ExpireSubmissionPathParams struct {
	SubmissionID string `pathParam:"style=simple,explode=false,name=submission_id"`
}

type ExpireSubmissionSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type ExpireSubmissionRequest struct {
	PathParams ExpireSubmissionPathParams
	Security   ExpireSubmissionSecurity
}

type ExpireSubmissionResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	Error               *shared.Error
	Submission          *shared.Submission
}
