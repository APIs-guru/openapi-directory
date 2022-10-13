package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubmissionPathParams struct {
	SubmissionID string `pathParam:"style=simple,explode=false,name=submission_id"`
}

type GetSubmissionQueryParams struct {
	IncludeData *bool `queryParam:"style=form,explode=true,name=include_data"`
}

type GetSubmissionSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type GetSubmissionRequest struct {
	PathParams  GetSubmissionPathParams
	QueryParams GetSubmissionQueryParams
	Security    GetSubmissionSecurity
}

type GetSubmissionResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationError *shared.AuthenticationError
	Error               *shared.Error
	Submission          *shared.Submission
}
