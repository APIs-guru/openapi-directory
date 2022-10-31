package operations

import (
"openapi/pkg/models/shared")

type DescribeAutomationExecutionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeAutomationExecutionsXAmzTargetEnum string

const (
    DescribeAutomationExecutionsXAmzTargetEnumAmazonSsmDescribeAutomationExecutions DescribeAutomationExecutionsXAmzTargetEnum = "AmazonSSM.DescribeAutomationExecutions"
)


type DescribeAutomationExecutionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeAutomationExecutionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeAutomationExecutionsRequest struct {
    QueryParams DescribeAutomationExecutionsQueryParams 
    Headers DescribeAutomationExecutionsHeaders 
    Request shared.DescribeAutomationExecutionsRequest `request:"mediaType=application/json"`
    
}

type DescribeAutomationExecutionsResponse struct {
    ContentType string 
    DescribeAutomationExecutionsResult *shared.DescribeAutomationExecutionsResult 
    InternalServerError *interface{} 
    InvalidFilterKey *interface{} 
    InvalidFilterValue *interface{} 
    InvalidNextToken *interface{} 
    StatusCode int64 
    
}

