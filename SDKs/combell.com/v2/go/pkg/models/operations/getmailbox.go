package operations

import (
	"openapi/pkg/models/shared"
)

type GetMailboxPathParams struct {
	MailboxName string `pathParam:"style=simple,explode=false,name=mailboxName"`
}

type GetMailboxQueryParams struct {
	MailboxName string `queryParam:"style=form,explode=true,name=mailbox_name"`
}

type GetMailboxRequest struct {
	PathParams  GetMailboxPathParams
	QueryParams GetMailboxQueryParams
}

type GetMailboxResponse struct {
	ContentType   string
	MailboxDetail *shared.MailboxDetail
	StatusCode    int64
}
