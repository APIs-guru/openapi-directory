package operations

import (
"openapi/pkg/models/shared")

type DatabaseDeleteDocumentPathParams struct {
    CollectionID string `pathParam:"style=simple,explode=false,name=collectionId"`
    DocumentID string `pathParam:"style=simple,explode=false,name=documentId"`
    
}

type DatabaseDeleteDocumentSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type DatabaseDeleteDocumentRequest struct {
    PathParams DatabaseDeleteDocumentPathParams 
    Security DatabaseDeleteDocumentSecurity 
    
}

type DatabaseDeleteDocumentResponse struct {
    ContentType string 
    StatusCode int64 
    
}

