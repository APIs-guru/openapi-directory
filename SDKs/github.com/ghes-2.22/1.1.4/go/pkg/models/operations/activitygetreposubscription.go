package operations

import (
	"openapi/pkg/models/shared"
)

type ActivityGetRepoSubscriptionPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ActivityGetRepoSubscriptionRequest struct {
	PathParams ActivityGetRepoSubscriptionPathParams
}

type ActivityGetRepoSubscriptionResponse struct {
	ContentType            string
	StatusCode             int64
	BasicError             *shared.BasicError
	RepositorySubscription *shared.RepositorySubscription
}
