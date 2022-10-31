package operations

import (
"openapi/pkg/models/shared")

type ListComplianceItemsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListComplianceItemsXAmzTargetEnum string

const (
    ListComplianceItemsXAmzTargetEnumAmazonSsmListComplianceItems ListComplianceItemsXAmzTargetEnum = "AmazonSSM.ListComplianceItems"
)


type ListComplianceItemsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListComplianceItemsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListComplianceItemsRequest struct {
    QueryParams ListComplianceItemsQueryParams 
    Headers ListComplianceItemsHeaders 
    Request shared.ListComplianceItemsRequest `request:"mediaType=application/json"`
    
}

type ListComplianceItemsResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    InvalidFilter *interface{} 
    InvalidNextToken *interface{} 
    InvalidResourceID *interface{} 
    InvalidResourceType *interface{} 
    ListComplianceItemsResult *shared.ListComplianceItemsResult 
    StatusCode int64 
    
}

