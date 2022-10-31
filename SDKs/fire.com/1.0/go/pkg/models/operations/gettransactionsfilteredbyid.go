package operations

import (
"openapi/pkg/models/shared")

type GetTransactionsFilteredByIDPathParams struct {
    Ican int64 `pathParam:"style=simple,explode=false,name=ican"`
    
}

type GetTransactionsFilteredByIDQueryParams struct {
    DateRangeFrom float64 `queryParam:"style=form,explode=true,name=dateRangeFrom"`
    DateRangeTo float64 `queryParam:"style=form,explode=true,name=dateRangeTo"`
    SearchKeyword string `queryParam:"style=form,explode=true,name=searchKeyword"`
    TransactionTypes []string `queryParam:"style=form,explode=true,name=transactionTypes"`
    
}

type GetTransactionsFilteredByIDRequest struct {
    PathParams GetTransactionsFilteredByIDPathParams 
    QueryParams GetTransactionsFilteredByIDQueryParams 
    
}

type GetTransactionsFilteredByIDResponse struct {
    ContentType string 
    StatusCode int64 
    Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema *shared.Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema 
    
}

