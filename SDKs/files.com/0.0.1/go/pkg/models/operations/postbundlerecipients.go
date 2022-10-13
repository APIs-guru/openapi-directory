package operations

import (
	"openapi/pkg/models/shared"
)

type PostBundleRecipientsRequestBody struct {
	BundleID         int32   `multipartForm:"name=bundle_id"`
	Company          *string `multipartForm:"name=company"`
	Name             *string `multipartForm:"name=name"`
	Note             *string `multipartForm:"name=note"`
	Recipient        string  `multipartForm:"name=recipient"`
	ShareAfterCreate *bool   `multipartForm:"name=share_after_create"`
	UserID           *int32  `multipartForm:"name=user_id"`
}

type PostBundleRecipientsRequest struct {
	Request *PostBundleRecipientsRequestBody `request:"mediaType=multipart/form-data"`
}

type PostBundleRecipientsResponse struct {
	BundleRecipientEntity *shared.BundleRecipientEntity
	ContentType           string
	StatusCode            int64
}
