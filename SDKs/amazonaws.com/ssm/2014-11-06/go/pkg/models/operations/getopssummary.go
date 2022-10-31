package operations

import (
"openapi/pkg/models/shared")

type GetOpsSummaryQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type GetOpsSummaryXAmzTargetEnum string

const (
    GetOpsSummaryXAmzTargetEnumAmazonSsmGetOpsSummary GetOpsSummaryXAmzTargetEnum = "AmazonSSM.GetOpsSummary"
)


type GetOpsSummaryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetOpsSummaryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetOpsSummaryRequest struct {
    QueryParams GetOpsSummaryQueryParams 
    Headers GetOpsSummaryHeaders 
    Request shared.GetOpsSummaryRequest `request:"mediaType=application/json"`
    
}

type GetOpsSummaryResponse struct {
    ContentType string 
    GetOpsSummaryResult *shared.GetOpsSummaryResult 
    InternalServerError *interface{} 
    InvalidAggregatorException *interface{} 
    InvalidFilter *interface{} 
    InvalidNextToken *interface{} 
    InvalidTypeNameException *interface{} 
    ResourceDataSyncNotFoundException *interface{} 
    StatusCode int64 
    
}

