package operations

import (
	"openapi/pkg/models/shared"
)

type ConfigureMailboxAutoReplyPathParams struct {
	MailboxName string `pathParam:"style=simple,explode=false,name=mailboxName"`
}

type ConfigureMailboxAutoReplyQueryParams struct {
	MailboxName string `queryParam:"style=form,explode=true,name=mailbox_name"`
}

type ConfigureMailboxAutoReplyRequest struct {
	PathParams  ConfigureMailboxAutoReplyPathParams
	QueryParams ConfigureMailboxAutoReplyQueryParams
	Request     *shared.AutoReply `request:"mediaType=application/json"`
}

type ConfigureMailboxAutoReplyResponse struct {
	ContentType string
	StatusCode  int64
}
