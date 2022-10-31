package operations

import (
"openapi/pkg/models/shared")

type GetUserByEmailAddressPathParams struct {
    EmailAddress string `pathParam:"style=simple,explode=false,name=emailAddress"`
    
}

type GetUserByEmailAddressQueryParams struct {
    SecondaryLookup *bool `queryParam:"style=form,explode=true,name=secondaryLookup"`
    
}

type GetUserByEmailAddressSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetUserByEmailAddressRequest struct {
    PathParams GetUserByEmailAddressPathParams 
    QueryParams GetUserByEmailAddressQueryParams 
    Security GetUserByEmailAddressSecurity 
    
}

type GetUserByEmailAddressResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    User *interface{} 
    
}

