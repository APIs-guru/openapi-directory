package operations

import (
"openapi/pkg/models/shared")

type GetComplianceSummaryQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    PaginationToken *string `queryParam:"style=form,explode=true,name=PaginationToken"`
    
}


type GetComplianceSummaryXAmzTargetEnum string

const (
    GetComplianceSummaryXAmzTargetEnumResourceGroupsTaggingApi20170126GetComplianceSummary GetComplianceSummaryXAmzTargetEnum = "ResourceGroupsTaggingAPI_20170126.GetComplianceSummary"
)


type GetComplianceSummaryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetComplianceSummaryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetComplianceSummaryRequest struct {
    QueryParams GetComplianceSummaryQueryParams 
    Headers GetComplianceSummaryHeaders 
    Request shared.GetComplianceSummaryInput `request:"mediaType=application/json"`
    
}

type GetComplianceSummaryResponse struct {
    ConstraintViolationException *interface{} 
    ContentType string 
    GetComplianceSummaryOutput *shared.GetComplianceSummaryOutput 
    InternalServiceException *interface{} 
    InvalidParameterException *interface{} 
    StatusCode int64 
    ThrottledException *interface{} 
    
}

