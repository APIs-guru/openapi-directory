package operations

import (
"openapi/pkg/models/shared")

type GetGroupsQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type GetGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGroupsRequestBody struct {
    NextToken *string `json:"NextToken,omitempty"`
    
}

type GetGroupsRequest struct {
    QueryParams GetGroupsQueryParams 
    Headers GetGroupsHeaders 
    Request GetGroupsRequestBody `request:"mediaType=application/json"`
    
}

type GetGroupsResponse struct {
    ContentType string 
    GetGroupsResult *shared.GetGroupsResult 
    InvalidRequestException *interface{} 
    StatusCode int64 
    ThrottledException *interface{} 
    
}

