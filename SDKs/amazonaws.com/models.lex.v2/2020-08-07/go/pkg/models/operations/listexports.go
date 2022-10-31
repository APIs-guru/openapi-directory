package operations

import (
"openapi/pkg/models/shared")

type ListExportsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListExportsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListExportsRequestBodySortBy struct {
    Attribute *shared.ExportSortAttributeEnum `json:"attribute,omitempty"`
    Order *shared.SortOrderEnum `json:"order,omitempty"`
    
}

type ListExportsRequestBody struct {
    BotID *string `json:"botId,omitempty"`
    BotVersion *string `json:"botVersion,omitempty"`
    Filters []shared.ExportFilter `json:"filters,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    SortBy *ListExportsRequestBodySortBy `json:"sortBy,omitempty"`
    
}

type ListExportsRequest struct {
    QueryParams ListExportsQueryParams 
    Headers ListExportsHeaders 
    Request ListExportsRequestBody `request:"mediaType=application/json"`
    
}

type ListExportsResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    ListExportsResponse *shared.ListExportsResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

