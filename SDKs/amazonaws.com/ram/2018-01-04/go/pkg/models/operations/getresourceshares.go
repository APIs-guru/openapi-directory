package operations

import (
"openapi/pkg/models/shared")

type GetResourceSharesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type GetResourceSharesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type GetResourceSharesRequestBodyResourceOwnerEnum string

const (
    GetResourceSharesRequestBodyResourceOwnerEnumSelf GetResourceSharesRequestBodyResourceOwnerEnum = "SELF"
GetResourceSharesRequestBodyResourceOwnerEnumOtherAccounts GetResourceSharesRequestBodyResourceOwnerEnum = "OTHER-ACCOUNTS"
)



type GetResourceSharesRequestBodyResourceShareStatusEnum string

const (
    GetResourceSharesRequestBodyResourceShareStatusEnumPending GetResourceSharesRequestBodyResourceShareStatusEnum = "PENDING"
GetResourceSharesRequestBodyResourceShareStatusEnumActive GetResourceSharesRequestBodyResourceShareStatusEnum = "ACTIVE"
GetResourceSharesRequestBodyResourceShareStatusEnumFailed GetResourceSharesRequestBodyResourceShareStatusEnum = "FAILED"
GetResourceSharesRequestBodyResourceShareStatusEnumDeleting GetResourceSharesRequestBodyResourceShareStatusEnum = "DELETING"
GetResourceSharesRequestBodyResourceShareStatusEnumDeleted GetResourceSharesRequestBodyResourceShareStatusEnum = "DELETED"
)


type GetResourceSharesRequestBody struct {
    MaxResults *int64 `json:"maxResults,omitempty"`
    Name *string `json:"name,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    PermissionArn *string `json:"permissionArn,omitempty"`
    ResourceOwner GetResourceSharesRequestBodyResourceOwnerEnum `json:"resourceOwner"`
    ResourceShareArns []string `json:"resourceShareArns,omitempty"`
    ResourceShareStatus *GetResourceSharesRequestBodyResourceShareStatusEnum `json:"resourceShareStatus,omitempty"`
    TagFilters []shared.TagFilter `json:"tagFilters,omitempty"`
    
}

type GetResourceSharesRequest struct {
    QueryParams GetResourceSharesQueryParams 
    Headers GetResourceSharesHeaders 
    Request GetResourceSharesRequestBody `request:"mediaType=application/json"`
    
}

type GetResourceSharesResponse struct {
    ContentType string 
    GetResourceSharesResponse *shared.GetResourceSharesResponse 
    InvalidNextTokenException *interface{} 
    InvalidParameterException *interface{} 
    MalformedArnException *interface{} 
    ServerInternalException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    UnknownResourceException *interface{} 
    
}

