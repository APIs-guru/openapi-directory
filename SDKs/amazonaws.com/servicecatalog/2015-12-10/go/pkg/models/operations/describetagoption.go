package operations

import (
"openapi/pkg/models/shared")


type DescribeTagOptionXAmzTargetEnum string

const (
    DescribeTagOptionXAmzTargetEnumAws242ServiceCatalogServiceDescribeTagOption DescribeTagOptionXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeTagOption"
)


type DescribeTagOptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeTagOptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeTagOptionRequest struct {
    Headers DescribeTagOptionHeaders 
    Request shared.DescribeTagOptionInput `request:"mediaType=application/json"`
    
}

type DescribeTagOptionResponse struct {
    ContentType string 
    DescribeTagOptionOutput *shared.DescribeTagOptionOutput 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TagOptionNotMigratedException *interface{} 
    
}

