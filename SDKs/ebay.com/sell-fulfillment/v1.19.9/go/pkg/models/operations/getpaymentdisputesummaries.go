package operations

import (
"openapi/pkg/models/shared")
var GetPaymentDisputeSummariesServers = []string{
	"https://apiz.ebay.com{basePath}",
}

type GetPaymentDisputeSummariesQueryParams struct {
    BuyerUsername *string `queryParam:"style=form,explode=true,name=buyer_username"`
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OpenDateFrom *string `queryParam:"style=form,explode=true,name=open_date_from"`
    OpenDateTo *string `queryParam:"style=form,explode=true,name=open_date_to"`
    OrderID *string `queryParam:"style=form,explode=true,name=order_id"`
    PaymentDisputeStatus *string `queryParam:"style=form,explode=true,name=payment_dispute_status"`
    
}

type GetPaymentDisputeSummariesSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetPaymentDisputeSummariesRequest struct {
    ServerURL *string 
    QueryParams GetPaymentDisputeSummariesQueryParams 
    Security GetPaymentDisputeSummariesSecurity 
    
}

type GetPaymentDisputeSummariesResponse struct {
    ContentType string 
    DisputeSummaryResponse *shared.DisputeSummaryResponse 
    StatusCode int64 
    
}

