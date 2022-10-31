package operations

import (
	"openapi/pkg/models/shared"
)

type ActivityGetThreadSubscriptionForAuthenticatedUserPathParams struct {
	ThreadID int64 `pathParam:"style=simple,explode=false,name=thread_id"`
}

type ActivityGetThreadSubscriptionForAuthenticatedUserRequest struct {
	PathParams ActivityGetThreadSubscriptionForAuthenticatedUserPathParams
}

type ActivityGetThreadSubscriptionForAuthenticatedUserResponse struct {
	ContentType        string
	StatusCode         int64
	BasicError         *shared.BasicError
	ThreadSubscription *shared.ThreadSubscription
}
