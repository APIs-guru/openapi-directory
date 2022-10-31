package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetConversationsDirectionEnum string

const (
	GetConversationsDirectionEnumBefore GetConversationsDirectionEnum = "BEFORE"
	GetConversationsDirectionEnumAfter  GetConversationsDirectionEnum = "AFTER"
)

type GetConversationsQueryParams struct {
	Direction *GetConversationsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	ModTime   *time.Time                     `queryParam:"style=form,explode=true,name=modTime"`
	Results   *float64                       `queryParam:"style=form,explode=true,name=results"`
}

type GetConversationsSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetConversationsRequest struct {
	QueryParams GetConversationsQueryParams
	Security    GetConversationsSecurity
}

type GetConversationsResponse struct {
	Body          []byte
	ContentType   string
	Conversations []interface{}
	StatusCode    int64
}
