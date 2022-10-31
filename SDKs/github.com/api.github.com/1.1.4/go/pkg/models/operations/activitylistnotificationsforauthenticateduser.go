package operations

import (
	"openapi/pkg/models/shared"
)

type ActivityListNotificationsForAuthenticatedUserQueryParams struct {
	All           *bool   `queryParam:"style=form,explode=true,name=all"`
	Before        *string `queryParam:"style=form,explode=true,name=before"`
	Page          *int64  `queryParam:"style=form,explode=true,name=page"`
	Participating *bool   `queryParam:"style=form,explode=true,name=participating"`
	PerPage       *int64  `queryParam:"style=form,explode=true,name=per_page"`
	Since         *string `queryParam:"style=form,explode=true,name=since"`
}

type ActivityListNotificationsForAuthenticatedUserRequest struct {
	QueryParams ActivityListNotificationsForAuthenticatedUserQueryParams
}

type ActivityListNotificationsForAuthenticatedUserResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	BasicError      *shared.BasicError
	Threads         []shared.Thread
	ValidationError *shared.ValidationError
}
