package operations

import (
"openapi/pkg/models/shared")

type ListSlotTypesPathParams struct {
    BotID string `pathParam:"style=simple,explode=false,name=botId"`
    BotVersion string `pathParam:"style=simple,explode=false,name=botVersion"`
    LocaleID string `pathParam:"style=simple,explode=false,name=localeId"`
    
}

type ListSlotTypesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListSlotTypesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListSlotTypesRequestBodySortBy struct {
    Attribute *shared.SlotTypeSortAttributeEnum `json:"attribute,omitempty"`
    Order *shared.SortOrderEnum `json:"order,omitempty"`
    
}

type ListSlotTypesRequestBody struct {
    Filters []shared.SlotTypeFilter `json:"filters,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    SortBy *ListSlotTypesRequestBodySortBy `json:"sortBy,omitempty"`
    
}

type ListSlotTypesRequest struct {
    PathParams ListSlotTypesPathParams 
    QueryParams ListSlotTypesQueryParams 
    Headers ListSlotTypesHeaders 
    Request ListSlotTypesRequestBody `request:"mediaType=application/json"`
    
}

type ListSlotTypesResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    ListSlotTypesResponse *shared.ListSlotTypesResponse 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

