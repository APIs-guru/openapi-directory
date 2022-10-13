package operations

import (
	"openapi/pkg/models/shared"
)

type GetSpaceParticipantsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSpaceParticipantsFilterTypeEnum string

const (
	GetSpaceParticipantsFilterTypeEnumNone       GetSpaceParticipantsFilterTypeEnum = "NONE"
	GetSpaceParticipantsFilterTypeEnumAccessType GetSpaceParticipantsFilterTypeEnum = "ACCESS_TYPE"
	GetSpaceParticipantsFilterTypeEnumRole       GetSpaceParticipantsFilterTypeEnum = "ROLE"
	GetSpaceParticipantsFilterTypeEnumState      GetSpaceParticipantsFilterTypeEnum = "STATE"
)

type GetSpaceParticipantsSortByEnum string

const (
	GetSpaceParticipantsSortByEnumDisplayName GetSpaceParticipantsSortByEnum = "DISPLAY_NAME"
	GetSpaceParticipantsSortByEnumName        GetSpaceParticipantsSortByEnum = "NAME"
	GetSpaceParticipantsSortByEnumFirstName   GetSpaceParticipantsSortByEnum = "FIRST_NAME"
)

type GetSpaceParticipantsSortOrderEnum string

const (
	GetSpaceParticipantsSortOrderEnumAscending  GetSpaceParticipantsSortOrderEnum = "ASCENDING"
	GetSpaceParticipantsSortOrderEnumDescending GetSpaceParticipantsSortOrderEnum = "DESCENDING"
)

type GetSpaceParticipantsQueryParams struct {
	FilterType      GetSpaceParticipantsFilterTypeEnum `queryParam:"style=form,explode=true,name=filterType"`
	FilterValue     *string                            `queryParam:"style=form,explode=true,name=filterValue"`
	NumberOfResults *float64                           `queryParam:"style=form,explode=true,name=numberOfResults"`
	Query           *string                            `queryParam:"style=form,explode=true,name=query"`
	SearchPointer   *string                            `queryParam:"style=form,explode=true,name=searchPointer"`
	SortBy          GetSpaceParticipantsSortByEnum     `queryParam:"style=form,explode=true,name=sortBy"`
	SortOrder       GetSpaceParticipantsSortOrderEnum  `queryParam:"style=form,explode=true,name=sortOrder"`
}

type GetSpaceParticipantsSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetSpaceParticipantsRequest struct {
	PathParams  GetSpaceParticipantsPathParams
	QueryParams GetSpaceParticipantsQueryParams
	Security    GetSpaceParticipantsSecurity
}

type GetSpaceParticipantsResponse struct {
	Body                     []byte
	ContentType              string
	ParticipantsSearchResult *interface{}
	StatusCode               int64
}
