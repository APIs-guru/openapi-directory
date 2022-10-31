package operations

import (
"openapi/pkg/models/shared")

type GetSaveOfferQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetSaveOfferSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type GetSaveOfferRequest struct {
    QueryParams GetSaveOfferQueryParams 
    Security GetSaveOfferSecurity 
    
}

type GetSaveOfferResponse struct {
    ContentType string 
    ItvGetDiscountResponse *shared.ItvGetDiscountResponse 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

