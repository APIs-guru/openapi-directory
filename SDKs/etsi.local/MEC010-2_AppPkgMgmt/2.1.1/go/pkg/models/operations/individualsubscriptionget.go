package operations

import (
"openapi/pkg/models/shared")

type IndividualSubscriptionGetPathParams struct {
    SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
    
}

type IndividualSubscriptionGetRequest struct {
    PathParams IndividualSubscriptionGetPathParams 
    
}

type IndividualSubscriptionGetResponse struct {
    AppPkgSubscriptionInfo *shared.AppPkgSubscriptionInfo 
    ContentType string 
    ProblemDetails *shared.ProblemDetails 
    StatusCode int64 
    
}

