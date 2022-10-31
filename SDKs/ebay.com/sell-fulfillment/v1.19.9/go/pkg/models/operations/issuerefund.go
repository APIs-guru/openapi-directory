package operations

import (
"openapi/pkg/models/shared")

type IssueRefundPathParams struct {
    OrderID string `pathParam:"style=simple,explode=false,name=order_id"`
    
}

type IssueRefundSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type IssueRefundRequest struct {
    PathParams IssueRefundPathParams 
    Request *shared.IssueRefundRequest `request:"mediaType=application/json"`
    Security IssueRefundSecurity 
    
}

type IssueRefundResponse struct {
    ContentType string 
    Refund *shared.Refund 
    StatusCode int64 
    
}

