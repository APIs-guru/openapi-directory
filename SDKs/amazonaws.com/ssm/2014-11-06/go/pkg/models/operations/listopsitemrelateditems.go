package operations

import (
"openapi/pkg/models/shared")

type ListOpsItemRelatedItemsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListOpsItemRelatedItemsXAmzTargetEnum string

const (
    ListOpsItemRelatedItemsXAmzTargetEnumAmazonSsmListOpsItemRelatedItems ListOpsItemRelatedItemsXAmzTargetEnum = "AmazonSSM.ListOpsItemRelatedItems"
)


type ListOpsItemRelatedItemsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListOpsItemRelatedItemsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListOpsItemRelatedItemsRequest struct {
    QueryParams ListOpsItemRelatedItemsQueryParams 
    Headers ListOpsItemRelatedItemsHeaders 
    Request shared.ListOpsItemRelatedItemsRequest `request:"mediaType=application/json"`
    
}

type ListOpsItemRelatedItemsResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    ListOpsItemRelatedItemsResponse *shared.ListOpsItemRelatedItemsResponse 
    OpsItemInvalidParameterException *interface{} 
    StatusCode int64 
    
}

