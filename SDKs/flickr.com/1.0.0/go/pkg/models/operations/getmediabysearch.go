package operations

import (
	"openapi/pkg/models/shared"
)

type GetMediaBySearchQueryParams struct {
	Accuracy       *string  `queryParam:"style=form,explode=true,name=accuracy"`
	APIKey         string   `queryParam:"style=form,explode=true,name=api_key"`
	Bbox           *string  `queryParam:"style=form,explode=true,name=bbox"`
	Contacts       *string  `queryParam:"style=form,explode=true,name=contacts"`
	ContentType    *float64 `queryParam:"style=form,explode=true,name=content_type"`
	GeoContext     *string  `queryParam:"style=form,explode=true,name=geo_context"`
	GroupID        *string  `queryParam:"style=form,explode=true,name=group_id"`
	HasGeo         *string  `queryParam:"style=form,explode=true,name=has_geo"`
	InGallery      *bool    `queryParam:"style=form,explode=true,name=in_gallery"`
	IsCommons      *bool    `queryParam:"style=form,explode=true,name=is_commons"`
	IsGetty        *bool    `queryParam:"style=form,explode=true,name=is_getty"`
	Lat            *string  `queryParam:"style=form,explode=true,name=lat"`
	License        *string  `queryParam:"style=form,explode=true,name=license"`
	Lon            *string  `queryParam:"style=form,explode=true,name=lon"`
	MachineTagMode *string  `queryParam:"style=form,explode=true,name=machine_tag_mode"`
	MachineTags    *string  `queryParam:"style=form,explode=true,name=machine_tags"`
	MaxTakenDate   *string  `queryParam:"style=form,explode=true,name=max_taken_date"`
	MaxUploadDate  *string  `queryParam:"style=form,explode=true,name=max_upload_date"`
	Media          *string  `queryParam:"style=form,explode=true,name=media"`
	MinTakenDate   *string  `queryParam:"style=form,explode=true,name=min_taken_date"`
	MinUploadDate  *string  `queryParam:"style=form,explode=true,name=min_upload_date"`
	Page           *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage        *float64 `queryParam:"style=form,explode=true,name=per_page"`
	PlaceID        *string  `queryParam:"style=form,explode=true,name=place_id"`
	PrivacyFilter  *float64 `queryParam:"style=form,explode=true,name=privacy_filter"`
	Radius         *float64 `queryParam:"style=form,explode=true,name=radius"`
	RadiusUnits    *string  `queryParam:"style=form,explode=true,name=radius_units"`
	SafeSearch     *float64 `queryParam:"style=form,explode=true,name=safe_search"`
	Sort           *string  `queryParam:"style=form,explode=true,name=sort"`
	Tags           *string  `queryParam:"style=form,explode=true,name=tags"`
	Text           *string  `queryParam:"style=form,explode=true,name=text"`
	UserID         *string  `queryParam:"style=form,explode=true,name=user_id"`
	WoeID          *string  `queryParam:"style=form,explode=true,name=woe_id"`
}

type GetMediaBySearchRequest struct {
	QueryParams GetMediaBySearchQueryParams
}

type GetMediaBySearch200ApplicationJSON struct {
	Page    *float64       `json:"page,omitempty"`
	Pages   *float64       `json:"pages,omitempty"`
	Perpage *float64       `json:"perpage,omitempty"`
	Photos  []shared.Photo `json:"photos,omitempty"`
	Total   *float64       `json:"total,omitempty"`
}

type GetMediaBySearchResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetMediaBySearch200ApplicationJSONObject *GetMediaBySearch200ApplicationJSON
}
