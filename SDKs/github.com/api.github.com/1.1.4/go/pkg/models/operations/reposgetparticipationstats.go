package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetParticipationStatsPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetParticipationStatsRequest struct {
	PathParams ReposGetParticipationStatsPathParams
}

type ReposGetParticipationStatsResponse struct {
	ContentType        string
	StatusCode         int64
	BasicError         *shared.BasicError
	ParticipationStats *shared.ParticipationStats
}
