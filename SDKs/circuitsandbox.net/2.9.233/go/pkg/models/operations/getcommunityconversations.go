package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommunityConversationsOrderEnum string

const (
	GetCommunityConversationsOrderEnumAscending  GetCommunityConversationsOrderEnum = "ASCENDING"
	GetCommunityConversationsOrderEnumDescending GetCommunityConversationsOrderEnum = "DESCENDING"
)

type GetCommunityConversationsSortEnum string

const (
	GetCommunityConversationsSortEnumAlphabetically GetCommunityConversationsSortEnum = "ALPHABETICALLY"
	GetCommunityConversationsSortEnumRecentActivity GetCommunityConversationsSortEnum = "RECENT_ACTIVITY"
	GetCommunityConversationsSortEnumPopularity     GetCommunityConversationsSortEnum = "POPULARITY"
)

type GetCommunityConversationsQueryParams struct {
	IncludeOwn *bool                               `queryParam:"style=form,explode=true,name=includeOwn"`
	Order      *GetCommunityConversationsOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Results    *float64                            `queryParam:"style=form,explode=true,name=results"`
	Sort       *GetCommunityConversationsSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	StartIndex *float64                            `queryParam:"style=form,explode=true,name=startIndex"`
}

type GetCommunityConversationsSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetCommunityConversationsRequest struct {
	QueryParams GetCommunityConversationsQueryParams
	Security    GetCommunityConversationsSecurity
}

type GetCommunityConversationsResponse struct {
	Body          []byte
	ContentType   string
	Conversations []interface{}
	StatusCode    int64
}
