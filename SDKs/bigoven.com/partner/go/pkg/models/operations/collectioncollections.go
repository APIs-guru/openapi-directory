package operations

import (
"openapi/pkg/models/shared")

type CollectionCollectionsQueryParams struct {
    Test *string `queryParam:"style=form,explode=true,name=test"`
    
}

type CollectionCollectionsRequest struct {
    QueryParams CollectionCollectionsQueryParams 
    
}

type CollectionCollectionsResponse struct {
    BigOvenModelApi2CollectionInfos []shared.BigOvenModelApi2CollectionInfo 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

