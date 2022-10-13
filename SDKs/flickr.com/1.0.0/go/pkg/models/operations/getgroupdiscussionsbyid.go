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

type GetGroupDiscussionsByIDRequest struct {
	QueryParams GetGroupDiscussionsByIDQueryParams
}

type GetGroupDiscussionsByID200ApplicationJSON struct {
	Iconfarm        *float64       `json:"iconfarm"`
	Iconserver      *float64       `json:"iconserver"`
	Ispoolmoderated *bool          `json:"ispoolmoderated"`
	Lang            *string        `json:"lang"`
	Members         *float64       `json:"members"`
	Name            *string        `json:"name"`
	Page            *float64       `json:"page"`
	Pages           *float64       `json:"pages"`
	PerPage         *float64       `json:"per_page"`
	Privacy         *float64       `json:"privacy"`
	Topics          []shared.Topic `json:"topics"`
	Total           *float64       `json:"total"`
}

type GetGroupDiscussionsByIDResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	GetGroupDiscussionsByID200ApplicationJSONObject *GetGroupDiscussionsByID200ApplicationJSON
}
