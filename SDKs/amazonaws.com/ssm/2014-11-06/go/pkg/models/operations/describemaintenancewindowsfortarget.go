package operations

import (
"openapi/pkg/models/shared")

type DescribeMaintenanceWindowsForTargetQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeMaintenanceWindowsForTargetXAmzTargetEnum string

const (
    DescribeMaintenanceWindowsForTargetXAmzTargetEnumAmazonSsmDescribeMaintenanceWindowsForTarget DescribeMaintenanceWindowsForTargetXAmzTargetEnum = "AmazonSSM.DescribeMaintenanceWindowsForTarget"
)


type DescribeMaintenanceWindowsForTargetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeMaintenanceWindowsForTargetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeMaintenanceWindowsForTargetRequest struct {
    QueryParams DescribeMaintenanceWindowsForTargetQueryParams 
    Headers DescribeMaintenanceWindowsForTargetHeaders 
    Request shared.DescribeMaintenanceWindowsForTargetRequest `request:"mediaType=application/json"`
    
}

type DescribeMaintenanceWindowsForTargetResponse struct {
    ContentType string 
    DescribeMaintenanceWindowsForTargetResult *shared.DescribeMaintenanceWindowsForTargetResult 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

