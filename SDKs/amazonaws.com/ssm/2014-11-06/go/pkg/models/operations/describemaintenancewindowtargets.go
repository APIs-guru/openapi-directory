package operations

import (
"openapi/pkg/models/shared")

type DescribeMaintenanceWindowTargetsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeMaintenanceWindowTargetsXAmzTargetEnum string

const (
    DescribeMaintenanceWindowTargetsXAmzTargetEnumAmazonSsmDescribeMaintenanceWindowTargets DescribeMaintenanceWindowTargetsXAmzTargetEnum = "AmazonSSM.DescribeMaintenanceWindowTargets"
)


type DescribeMaintenanceWindowTargetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeMaintenanceWindowTargetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeMaintenanceWindowTargetsRequest struct {
    QueryParams DescribeMaintenanceWindowTargetsQueryParams 
    Headers DescribeMaintenanceWindowTargetsHeaders 
    Request shared.DescribeMaintenanceWindowTargetsRequest `request:"mediaType=application/json"`
    
}

type DescribeMaintenanceWindowTargetsResponse struct {
    ContentType string 
    DescribeMaintenanceWindowTargetsResult *shared.DescribeMaintenanceWindowTargetsResult 
    DoesNotExistException *interface{} 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

