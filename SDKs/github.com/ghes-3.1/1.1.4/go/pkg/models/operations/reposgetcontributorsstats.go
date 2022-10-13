package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetContributorsStatsPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetContributorsStatsRequest struct {
	PathParams ReposGetContributorsStatsPathParams
}

type ReposGetContributorsStatsResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	ContributorActivities                             []shared.ContributorActivity
	ReposGetContributorsStats202ApplicationJSONObject map[string]interface{}
}
