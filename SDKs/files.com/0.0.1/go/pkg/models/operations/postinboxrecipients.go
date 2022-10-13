package operations

import (
	"openapi/pkg/models/shared"
)

type PostInboxRecipientsRequestBody struct {
	Company          *string `multipartForm:"name=company"`
	InboxID          int32   `multipartForm:"name=inbox_id"`
	Name             *string `multipartForm:"name=name"`
	Note             *string `multipartForm:"name=note"`
	Recipient        string  `multipartForm:"name=recipient"`
	ShareAfterCreate *bool   `multipartForm:"name=share_after_create"`
	UserID           *int32  `multipartForm:"name=user_id"`
}

type PostInboxRecipientsRequest struct {
	Request *PostInboxRecipientsRequestBody `request:"mediaType=multipart/form-data"`
}

type PostInboxRecipientsResponse struct {
	ContentType          string
	InboxRecipientEntity *shared.InboxRecipientEntity
	StatusCode           int64
}
