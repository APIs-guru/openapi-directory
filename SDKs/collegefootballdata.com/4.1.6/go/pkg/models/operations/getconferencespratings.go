package operations

import (
	"openapi/pkg/models/shared"
)

type GetConferenceSpRatingsQueryParams struct {
	Conference *string `queryParam:"style=form,explode=true,name=conference"`
	Year       *int64  `queryParam:"style=form,explode=true,name=year"`
}

type GetConferenceSpRatingsRequest struct {
	QueryParams GetConferenceSpRatingsQueryParams
}

type GetConferenceSpRatingsResponse struct {
	ConferenceSpRatings []shared.ConferenceSpRating
	ContentType         string
	StatusCode          int64
}
