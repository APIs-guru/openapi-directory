package operations

import (
"openapi/pkg/models/shared")

type ListPermissionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListPermissionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListPermissionsRequestBody struct {
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    ResourceType *string `json:"resourceType,omitempty"`
    
}

type ListPermissionsRequest struct {
    QueryParams ListPermissionsQueryParams 
    Headers ListPermissionsHeaders 
    Request ListPermissionsRequestBody `request:"mediaType=application/json"`
    
}

type ListPermissionsResponse struct {
    ContentType string 
    InvalidNextTokenException *interface{} 
    InvalidParameterException *interface{} 
    ListPermissionsResponse *shared.ListPermissionsResponse 
    OperationNotPermittedException *interface{} 
    ServerInternalException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

