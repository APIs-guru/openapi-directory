package operations

import (
"openapi/pkg/models/shared")

type ListEnabledProductsForImportQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListEnabledProductsForImportHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListEnabledProductsForImportRequest struct {
    QueryParams ListEnabledProductsForImportQueryParams 
    Headers ListEnabledProductsForImportHeaders 
    
}

type ListEnabledProductsForImportResponse struct {
    ContentType string 
    InternalException *interface{} 
    InvalidAccessException *interface{} 
    LimitExceededException *interface{} 
    ListEnabledProductsForImportResponse *shared.ListEnabledProductsForImportResponse 
    StatusCode int64 
    
}

