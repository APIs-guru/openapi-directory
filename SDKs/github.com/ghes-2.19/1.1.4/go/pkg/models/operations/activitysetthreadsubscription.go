package operations

import (
	"openapi/pkg/models/shared"
)

type ActivitySetThreadSubscriptionPathParams struct {
	ThreadID int64 `pathParam:"style=simple,explode=false,name=thread_id"`
}

type ActivitySetThreadSubscriptionRequestBody struct {
	Ignored *bool `json:"ignored"`
}

type ActivitySetThreadSubscriptionRequest struct {
	PathParams ActivitySetThreadSubscriptionPathParams
	Request    *ActivitySetThreadSubscriptionRequestBody `request:"mediaType=application/json"`
}

type ActivitySetThreadSubscriptionResponse struct {
	ContentType        string
	StatusCode         int64
	BasicError         *shared.BasicError
	ThreadSubscription *shared.ThreadSubscription
}
