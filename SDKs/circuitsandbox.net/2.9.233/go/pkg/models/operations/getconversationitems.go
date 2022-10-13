package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetConversationItemsPathParams struct {
	ConvID string `pathParam:"style=simple,explode=false,name=convId"`
}

type GetConversationItemsDirectionEnum string

const (
	GetConversationItemsDirectionEnumBefore GetConversationItemsDirectionEnum = "BEFORE"
	GetConversationItemsDirectionEnumAfter  GetConversationItemsDirectionEnum = "AFTER"
)

type GetConversationItemsQueryParams struct {
	Direction *GetConversationItemsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	ModTime   *time.Time                         `queryParam:"style=form,explode=true,name=modTime"`
	Results   *float64                           `queryParam:"style=form,explode=true,name=results"`
}

type GetConversationItemsSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetConversationItemsRequest struct {
	PathParams  GetConversationItemsPathParams
	QueryParams GetConversationItemsQueryParams
	Security    GetConversationItemsSecurity
}

type GetConversationItemsResponse struct {
	Body              []byte
	ContentType       string
	ConversationItems []interface{}
	StatusCode        int64
}
