package operations

import (
"openapi/pkg/models/shared")

type GooglePaySubscriptionQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GooglePaySubscriptionSecurity struct {
    ProfileAuth shared.SchemeProfileAuth `security:"scheme,type=oauth2"`
    
}

type GooglePaySubscriptionRequest struct {
    QueryParams GooglePaySubscriptionQueryParams 
    Request shared.ItvGooglePaySubscriptionRequest `request:"mediaType=application/json"`
    Security GooglePaySubscriptionSecurity 
    
}

type GooglePaySubscriptionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

