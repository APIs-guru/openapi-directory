package operations

import (
"time"
"openapi/pkg/models/shared")

type GetReturnsQueryParams struct {
    FromDate string `queryParam:"style=form,explode=true,name=fromDate"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    ToDate string `queryParam:"style=form,explode=true,name=toDate"`
    
}

type GetReturnsSecurity struct {
    FdcAuth shared.SchemeFdcAuth `security:"scheme,type=oauth2"`
    
}

type GetReturnsRequest struct {
    QueryParams GetReturnsQueryParams 
    Security GetReturnsSecurity 
    
}

type GetReturnsReturnsArrayV2ReturnV2Order struct {
    ID *int64 `json:"id,omitempty"`
    MerchantID *int64 `json:"merchantId,omitempty"`
    MerchantOrderID *string `json:"merchantOrderId,omitempty"`
    
}

type GetReturnsReturnsArrayV2ReturnV2Reason struct {
    ID int64 `json:"id"`
    Title string `json:"title"`
    
}

type GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item struct {
    ID *int64 `json:"id,omitempty"`
    Sku *string `json:"sku,omitempty"`
    
}

type GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason struct {
    ID *int64 `json:"id,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type GetReturnsReturnsArrayV2ReturnV2RmaItemV2 struct {
    Comments *string `json:"comments,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Item *GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item `json:"item,omitempty"`
    NonRestockedReason *GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason `json:"nonRestockedReason,omitempty"`
    QuantityExpected *int64 `json:"quantityExpected,omitempty"`
    QuantityRestocked *int64 `json:"quantityRestocked,omitempty"`
    QuantityReturned *int64 `json:"quantityReturned,omitempty"`
    QuantityShipped *int64 `json:"quantityShipped,omitempty"`
    
}

type GetReturnsReturnsArrayV2ReturnV2Status struct {
    ID int64 `json:"id"`
    Title string `json:"title"`
    
}

type GetReturnsReturnsArrayV2ReturnV2UserV2 struct {
    ID int64 `json:"id"`
    
}

type GetReturnsReturnsArrayV2ReturnV2 struct {
    Comments *string `json:"comments,omitempty"`
    CreatedAt time.Time `json:"createdAt"`
    CreatedBy shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy `json:"createdBy"`
    ID int64 `json:"id"`
    Order *GetReturnsReturnsArrayV2ReturnV2Order `json:"order,omitempty"`
    Reason GetReturnsReturnsArrayV2ReturnV2Reason `json:"reason"`
    ReturnedBy *string `json:"returnedBy,omitempty"`
    RmaItems []GetReturnsReturnsArrayV2ReturnV2RmaItemV2 `json:"rmaItems,omitempty"`
    RmaNumber *string `json:"rmaNumber,omitempty"`
    Status GetReturnsReturnsArrayV2ReturnV2Status `json:"status"`
    UpdatedAt time.Time `json:"updatedAt"`
    UpdatedBy GetReturnsReturnsArrayV2ReturnV2UserV2 `json:"updatedBy"`
    
}

type GetReturnsReturnsArrayV2MetaPaginationV2 struct {
    Count *int64 `json:"count,omitempty"`
    CurrentPage *int64 `json:"currentPage,omitempty"`
    Total *int64 `json:"total,omitempty"`
    TotalPages *int64 `json:"totalPages,omitempty"`
    
}

type GetReturnsReturnsArrayV2Meta struct {
    Pagination *GetReturnsReturnsArrayV2MetaPaginationV2 `json:"pagination,omitempty"`
    
}

type GetReturnsReturnsArrayV2 struct {
    Data []GetReturnsReturnsArrayV2ReturnV2 `json:"data,omitempty"`
    Meta *GetReturnsReturnsArrayV2Meta `json:"meta,omitempty"`
    
}

type GetReturnsResponse struct {
    ContentType string 
    ReturnsArrayV2 *GetReturnsReturnsArrayV2 
    StatusCode int64 
    
}

