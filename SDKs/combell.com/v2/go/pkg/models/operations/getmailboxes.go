package operations

import (
	"openapi/pkg/models/shared"
)

type GetMailboxesQueryParams struct {
	DomainName *string `queryParam:"style=form,explode=true,name=domain_name"`
}

type GetMailboxesRequest struct {
	QueryParams GetMailboxesQueryParams
}

type GetMailboxesResponse struct {
	ContentType string
	Mailboxes   []shared.Mailbox
	StatusCode  int64
}
