package operations

import (
"openapi/pkg/models/shared")


type DescribeRecordXAmzTargetEnum string

const (
    DescribeRecordXAmzTargetEnumAws242ServiceCatalogServiceDescribeRecord DescribeRecordXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeRecord"
)


type DescribeRecordHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeRecordXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeRecordRequest struct {
    Headers DescribeRecordHeaders 
    Request shared.DescribeRecordInput `request:"mediaType=application/json"`
    
}

type DescribeRecordResponse struct {
    ContentType string 
    DescribeRecordOutput *shared.DescribeRecordOutput 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

