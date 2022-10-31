package operations

import (
"openapi/pkg/models/shared")

type GetCustomerServiceMetricPathParams struct {
    CustomerServiceMetricType string `pathParam:"style=simple,explode=false,name=customer_service_metric_type"`
    EvaluationType string `pathParam:"style=simple,explode=false,name=evaluation_type"`
    
}

type GetCustomerServiceMetricQueryParams struct {
    EvaluationMarketplaceID string `queryParam:"style=form,explode=true,name=evaluation_marketplace_id"`
    
}

type GetCustomerServiceMetricSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetCustomerServiceMetricRequest struct {
    PathParams GetCustomerServiceMetricPathParams 
    QueryParams GetCustomerServiceMetricQueryParams 
    Security GetCustomerServiceMetricSecurity 
    
}

type GetCustomerServiceMetricResponse struct {
    ContentType string 
    GetCustomerServiceMetricResponse *shared.GetCustomerServiceMetricResponse 
    StatusCode int64 
    
}

