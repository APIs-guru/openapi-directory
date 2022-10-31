package operations

import (
"openapi/pkg/models/shared")

type DescribeMaintenanceWindowExecutionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeMaintenanceWindowExecutionsXAmzTargetEnum string

const (
    DescribeMaintenanceWindowExecutionsXAmzTargetEnumAmazonSsmDescribeMaintenanceWindowExecutions DescribeMaintenanceWindowExecutionsXAmzTargetEnum = "AmazonSSM.DescribeMaintenanceWindowExecutions"
)


type DescribeMaintenanceWindowExecutionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeMaintenanceWindowExecutionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeMaintenanceWindowExecutionsRequest struct {
    QueryParams DescribeMaintenanceWindowExecutionsQueryParams 
    Headers DescribeMaintenanceWindowExecutionsHeaders 
    Request shared.DescribeMaintenanceWindowExecutionsRequest `request:"mediaType=application/json"`
    
}

type DescribeMaintenanceWindowExecutionsResponse struct {
    ContentType string 
    DescribeMaintenanceWindowExecutionsResult *shared.DescribeMaintenanceWindowExecutionsResult 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

