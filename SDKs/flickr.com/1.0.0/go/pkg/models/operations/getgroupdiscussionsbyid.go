package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupDiscussionsByIDQueryParams struct {
	APIKey  string   `queryParam:"style=form,explode=true,name=api_key"`
	GroupID *string  `queryParam:"style=form,explode=true,name=group_id"`
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetGroupDiscussionsByID200ApplicationJSON struct {
	Iconfarm        *float64       `json:"iconfarm,omitempty"`
	Iconserver      *float64       `json:"iconserver,omitempty"`
	Ispoolmoderated *bool          `json:"ispoolmoderated,omitempty"`
	Lang            *string        `json:"lang,omitempty"`
	Members         *float64       `json:"members,omitempty"`
	Name            *string        `json:"name,omitempty"`
	Page            *float64       `json:"page,omitempty"`
	Pages           *float64       `json:"pages,omitempty"`
	PerPage         *float64       `json:"per_page,omitempty"`
	Privacy         *float64       `json:"privacy,omitempty"`
	Topics          []shared.Topic `json:"topics,omitempty"`
	Total           *float64       `json:"total,omitempty"`
}

type GetGroupDiscussionsByIDRequest struct {
	QueryParams GetGroupDiscussionsByIDQueryParams
}

type GetGroupDiscussionsByIDResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	GetGroupDiscussionsByID200ApplicationJSONObject *GetGroupDiscussionsByID200ApplicationJSON
}
