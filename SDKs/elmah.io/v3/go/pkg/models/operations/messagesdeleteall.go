package operations

import (
	"openapi/pkg/models/shared"
)

type MessagesDeleteAllPathParams struct {
	LogID string `pathParam:"style=simple,explode=false,name=logId"`
}

type MessagesDeleteAllRequests struct {
	Search  *shared.Search `request:"mediaType=application/*+json"`
	Search1 *shared.Search `request:"mediaType=application/json"`
	Search2 *shared.Search `request:"mediaType=application/json-patch+json"`
	Search3 *shared.Search `request:"mediaType=text/json"`
}

type MessagesDeleteAllRequest struct {
	PathParams MessagesDeleteAllPathParams
	Request    *MessagesDeleteAllRequests
}

type MessagesDeleteAllResponse struct {
	ContentType string
	StatusCode  int64
}
