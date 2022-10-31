package operations

import (
	"openapi/pkg/models/shared"
)

type SubscribeDownloadSharesHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type SubscribeDownloadSharesRequest struct {
	Headers SubscribeDownloadSharesHeaders
	Request shared.UpdateSubscriptionsBulkRequest `request:"mediaType=application/json"`
}

type SubscribeDownloadSharesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
