package operations

import (
"openapi/pkg/models/shared")

type DatabaseListDocumentsPathParams struct {
    CollectionID string `pathParam:"style=simple,explode=false,name=collectionId"`
    
}

type DatabaseListDocumentsQueryParams struct {
    Filters []string `queryParam:"style=form,explode=true,name=filters"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    OrderCast *string `queryParam:"style=form,explode=true,name=orderCast"`
    OrderField *string `queryParam:"style=form,explode=true,name=orderField"`
    OrderType *string `queryParam:"style=form,explode=true,name=orderType"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type DatabaseListDocumentsSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type DatabaseListDocumentsRequest struct {
    PathParams DatabaseListDocumentsPathParams 
    QueryParams DatabaseListDocumentsQueryParams 
    Security DatabaseListDocumentsSecurity 
    
}

type DatabaseListDocumentsResponse struct {
    ContentType string 
    StatusCode int64 
    DocumentList *shared.DocumentList 
    
}

