package operations

import (
"openapi/pkg/models/shared")

type GetFullPriceRenewalQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetFullPriceRenewalSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type GetFullPriceRenewalRequest struct {
    QueryParams GetFullPriceRenewalQueryParams 
    Security GetFullPriceRenewalSecurity 
    
}

type GetFullPriceRenewalResponse struct {
    ContentType string 
    ItvSubscriptionFullPriceRenewal *shared.ItvSubscriptionFullPriceRenewal 
    StatusCode int64 
    
}

