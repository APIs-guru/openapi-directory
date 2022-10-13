package operations

import (
	"openapi/pkg/models/shared"
)

type ActivitySetRepoSubscriptionPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ActivitySetRepoSubscriptionRequestBody struct {
	Ignored    *bool `json:"ignored"`
	Subscribed *bool `json:"subscribed"`
}

type ActivitySetRepoSubscriptionRequest struct {
	PathParams ActivitySetRepoSubscriptionPathParams
	Request    *ActivitySetRepoSubscriptionRequestBody `request:"mediaType=application/json"`
}

type ActivitySetRepoSubscriptionResponse struct {
	ContentType            string
	StatusCode             int64
	RepositorySubscription *shared.RepositorySubscription
}
