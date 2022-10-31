package operations

import (
"openapi/pkg/models/shared")

type DescribeAutomationStepExecutionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeAutomationStepExecutionsXAmzTargetEnum string

const (
    DescribeAutomationStepExecutionsXAmzTargetEnumAmazonSsmDescribeAutomationStepExecutions DescribeAutomationStepExecutionsXAmzTargetEnum = "AmazonSSM.DescribeAutomationStepExecutions"
)


type DescribeAutomationStepExecutionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeAutomationStepExecutionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeAutomationStepExecutionsRequest struct {
    QueryParams DescribeAutomationStepExecutionsQueryParams 
    Headers DescribeAutomationStepExecutionsHeaders 
    Request shared.DescribeAutomationStepExecutionsRequest `request:"mediaType=application/json"`
    
}

type DescribeAutomationStepExecutionsResponse struct {
    AutomationExecutionNotFoundException *interface{} 
    ContentType string 
    DescribeAutomationStepExecutionsResult *shared.DescribeAutomationStepExecutionsResult 
    InternalServerError *interface{} 
    InvalidFilterKey *interface{} 
    InvalidFilterValue *interface{} 
    InvalidNextToken *interface{} 
    StatusCode int64 
    
}

