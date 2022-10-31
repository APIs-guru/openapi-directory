package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideoChannelVideosPathParams struct {
	ChannelHandle string `pathParam:"style=simple,explode=false,name=channelHandle"`
}

type GetVideoChannelVideosQueryParams struct {
	CategoryOneOf *interface{}           `queryParam:"style=form,explode=false,name=categoryOneOf"`
	Count         *int64                 `queryParam:"style=form,explode=true,name=count"`
	Filter        *shared.FilterEnum     `queryParam:"style=form,explode=true,name=filter"`
	IsLive        *bool                  `queryParam:"style=form,explode=true,name=isLive"`
	LanguageOneOf *interface{}           `queryParam:"style=form,explode=false,name=languageOneOf"`
	LicenceOneOf  *interface{}           `queryParam:"style=form,explode=false,name=licenceOneOf"`
	Nsfw          *shared.NsfwEnum       `queryParam:"style=form,explode=true,name=nsfw"`
	SkipCount     *shared.SkipCountEnum  `queryParam:"style=form,explode=true,name=skipCount"`
	Sort          *shared.VideosSortEnum `queryParam:"style=form,explode=true,name=sort"`
	Start         *int64                 `queryParam:"style=form,explode=true,name=start"`
	TagsAllOf     *interface{}           `queryParam:"style=form,explode=false,name=tagsAllOf"`
	TagsOneOf     *interface{}           `queryParam:"style=form,explode=false,name=tagsOneOf"`
}

type GetVideoChannelVideosRequest struct {
	PathParams  GetVideoChannelVideosPathParams
	QueryParams GetVideoChannelVideosQueryParams
}

type GetVideoChannelVideosResponse struct {
	ContentType       string
	StatusCode        int64
	VideoListResponse *interface{}
}
