package operations

import (
"openapi/pkg/models/shared")

type AccountGetGuestPathParams struct {
    GuestID int64 `pathParam:"style=simple,explode=false,name=guestId"`
    
}

type AccountGetGuestRequest struct {
    PathParams AccountGetGuestPathParams 
    
}

type AccountGetGuestResponse struct {
    APICoreDtoAccountingGuest *shared.APICoreDtoAccountingGuest 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

