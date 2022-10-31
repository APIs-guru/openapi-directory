package operations

import (
"openapi/pkg/models/shared")

type ListResourceComplianceSummariesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListResourceComplianceSummariesXAmzTargetEnum string

const (
    ListResourceComplianceSummariesXAmzTargetEnumAmazonSsmListResourceComplianceSummaries ListResourceComplianceSummariesXAmzTargetEnum = "AmazonSSM.ListResourceComplianceSummaries"
)


type ListResourceComplianceSummariesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListResourceComplianceSummariesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListResourceComplianceSummariesRequest struct {
    QueryParams ListResourceComplianceSummariesQueryParams 
    Headers ListResourceComplianceSummariesHeaders 
    Request shared.ListResourceComplianceSummariesRequest `request:"mediaType=application/json"`
    
}

type ListResourceComplianceSummariesResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    InvalidFilter *interface{} 
    InvalidNextToken *interface{} 
    ListResourceComplianceSummariesResult *shared.ListResourceComplianceSummariesResult 
    StatusCode int64 
    
}

