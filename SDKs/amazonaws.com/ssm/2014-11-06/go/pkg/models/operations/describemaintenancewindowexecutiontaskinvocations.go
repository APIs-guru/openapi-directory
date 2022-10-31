package operations

import (
"openapi/pkg/models/shared")

type DescribeMaintenanceWindowExecutionTaskInvocationsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeMaintenanceWindowExecutionTaskInvocationsXAmzTargetEnum string

const (
    DescribeMaintenanceWindowExecutionTaskInvocationsXAmzTargetEnumAmazonSsmDescribeMaintenanceWindowExecutionTaskInvocations DescribeMaintenanceWindowExecutionTaskInvocationsXAmzTargetEnum = "AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations"
)


type DescribeMaintenanceWindowExecutionTaskInvocationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeMaintenanceWindowExecutionTaskInvocationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeMaintenanceWindowExecutionTaskInvocationsRequest struct {
    QueryParams DescribeMaintenanceWindowExecutionTaskInvocationsQueryParams 
    Headers DescribeMaintenanceWindowExecutionTaskInvocationsHeaders 
    Request shared.DescribeMaintenanceWindowExecutionTaskInvocationsRequest `request:"mediaType=application/json"`
    
}

type DescribeMaintenanceWindowExecutionTaskInvocationsResponse struct {
    ContentType string 
    DescribeMaintenanceWindowExecutionTaskInvocationsResult *shared.DescribeMaintenanceWindowExecutionTaskInvocationsResult 
    DoesNotExistException *interface{} 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

