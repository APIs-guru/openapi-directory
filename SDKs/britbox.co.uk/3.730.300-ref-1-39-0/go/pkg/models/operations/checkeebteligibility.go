package operations

import (
"openapi/pkg/models/shared")

type CheckEeBtEligibilityQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type CheckEeBtEligibilitySecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type CheckEeBtEligibilityRequest struct {
    QueryParams CheckEeBtEligibilityQueryParams 
    Security CheckEeBtEligibilitySecurity 
    
}

type CheckEeBtEligibilityResponse struct {
    ContentType string 
    EeBtEligibility *shared.EeBtEligibility 
    StatusCode int64 
    
}

