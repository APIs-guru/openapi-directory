package operations

import (
"openapi/pkg/models/shared")


type DescribeServiceActionXAmzTargetEnum string

const (
    DescribeServiceActionXAmzTargetEnumAws242ServiceCatalogServiceDescribeServiceAction DescribeServiceActionXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeServiceAction"
)


type DescribeServiceActionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeServiceActionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeServiceActionRequest struct {
    Headers DescribeServiceActionHeaders 
    Request shared.DescribeServiceActionInput `request:"mediaType=application/json"`
    
}

type DescribeServiceActionResponse struct {
    ContentType string 
    DescribeServiceActionOutput *shared.DescribeServiceActionOutput 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

