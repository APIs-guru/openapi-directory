package operations

import (
"openapi/pkg/models/shared")


type DescribeNamespaceXAmzTargetEnum string

const (
    DescribeNamespaceXAmzTargetEnumIotThingsGraphFrontEndServiceDescribeNamespace DescribeNamespaceXAmzTargetEnum = "IotThingsGraphFrontEndService.DescribeNamespace"
)


type DescribeNamespaceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeNamespaceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeNamespaceRequest struct {
    Headers DescribeNamespaceHeaders 
    Request shared.DescribeNamespaceRequest `request:"mediaType=application/json"`
    
}

type DescribeNamespaceResponse struct {
    ContentType string 
    DescribeNamespaceResponse *shared.DescribeNamespaceResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

