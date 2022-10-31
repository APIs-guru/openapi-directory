package operations

import (
	"openapi/pkg/models/shared"
)

type GetNextPlaybackItemPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetNextPlaybackItemExpandEnum string

const (
	GetNextPlaybackItemExpandEnumParent    GetNextPlaybackItemExpandEnum = "parent"
	GetNextPlaybackItemExpandEnumAncestors GetNextPlaybackItemExpandEnum = "ancestors"
)

type GetNextPlaybackItemQueryParams struct {
	Device    *string                        `queryParam:"style=form,explode=true,name=device"`
	Expand    *GetNextPlaybackItemExpandEnum `queryParam:"style=form,explode=true,name=expand"`
	Ff        []shared.FeatureFlagsEnum      `queryParam:"style=form,explode=false,name=ff"`
	Lang      *string                        `queryParam:"style=form,explode=true,name=lang"`
	MaxRating *string                        `queryParam:"style=form,explode=true,name=max_rating"`
	Segments  []string                       `queryParam:"style=form,explode=false,name=segments"`
	Sub       *string                        `queryParam:"style=form,explode=true,name=sub"`
}

type GetNextPlaybackItemSecurity struct {
	ProfileAuth shared.SchemeProfileAuth `security:"scheme,type=oauth2"`
}

type GetNextPlaybackItemRequest struct {
	PathParams  GetNextPlaybackItemPathParams
	QueryParams GetNextPlaybackItemQueryParams
	Security    GetNextPlaybackItemSecurity
}

type GetNextPlaybackItemResponse struct {
	ContentType      string
	NextPlaybackItem *shared.NextPlaybackItem
	ServiceError     *shared.ServiceError
	StatusCode       int64
}
