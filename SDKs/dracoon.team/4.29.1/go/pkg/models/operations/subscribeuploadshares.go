package operations

import (
	"openapi/pkg/models/shared"
)

type SubscribeUploadSharesHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type SubscribeUploadSharesRequest struct {
	Headers SubscribeUploadSharesHeaders
	Request shared.UpdateSubscriptionsBulkRequest `request:"mediaType=application/json"`
}

type SubscribeUploadSharesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
