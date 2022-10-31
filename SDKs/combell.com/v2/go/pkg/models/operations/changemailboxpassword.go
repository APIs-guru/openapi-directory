package operations

import (
"openapi/pkg/models/shared")

type ChangeMailboxPasswordPathParams struct {
    MailboxName string `pathParam:"style=simple,explode=false,name=mailboxName"`
    
}

type ChangeMailboxPasswordQueryParams struct {
    MailboxName string `queryParam:"style=form,explode=true,name=mailbox_name"`
    
}

type ChangeMailboxPasswordRequest struct {
    PathParams ChangeMailboxPasswordPathParams 
    QueryParams ChangeMailboxPasswordQueryParams 
    Request *shared.UpdateMailboxPasswordRequest `request:"mediaType=application/json"`
    
}

type ChangeMailboxPasswordResponse struct {
    ContentType string 
    StatusCode int64 
    
}

