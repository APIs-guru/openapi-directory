package operations

import (
"openapi/pkg/models/shared")

type ConfigureMailboxAutoForwardPathParams struct {
    MailboxName string `pathParam:"style=simple,explode=false,name=mailboxName"`
    
}

type ConfigureMailboxAutoForwardQueryParams struct {
    MailboxName string `queryParam:"style=form,explode=true,name=mailbox_name"`
    
}

type ConfigureMailboxAutoForwardRequest struct {
    PathParams ConfigureMailboxAutoForwardPathParams 
    QueryParams ConfigureMailboxAutoForwardQueryParams 
    Request *shared.AutoForward `request:"mediaType=application/json"`
    
}

type ConfigureMailboxAutoForwardResponse struct {
    ContentType string 
    StatusCode int64 
    
}

