package operations

type DeleteMailboxPathParams struct {
	MailboxName string `pathParam:"style=simple,explode=false,name=mailboxName"`
}

type DeleteMailboxQueryParams struct {
	MailboxName string `queryParam:"style=form,explode=true,name=mailbox_name"`
}

type DeleteMailboxRequest struct {
	PathParams  DeleteMailboxPathParams
	QueryParams DeleteMailboxQueryParams
}

type DeleteMailboxResponse struct {
	ContentType string
	StatusCode  int64
}
