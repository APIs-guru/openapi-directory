package operations

import (
"openapi/pkg/models/shared")


type DescribeProvisioningParametersXAmzTargetEnum string

const (
    DescribeProvisioningParametersXAmzTargetEnumAws242ServiceCatalogServiceDescribeProvisioningParameters DescribeProvisioningParametersXAmzTargetEnum = "AWS242ServiceCatalogService.DescribeProvisioningParameters"
)


type DescribeProvisioningParametersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeProvisioningParametersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeProvisioningParametersRequest struct {
    Headers DescribeProvisioningParametersHeaders 
    Request shared.DescribeProvisioningParametersInput `request:"mediaType=application/json"`
    
}

type DescribeProvisioningParametersResponse struct {
    ContentType string 
    DescribeProvisioningParametersOutput *shared.DescribeProvisioningParametersOutput 
    InvalidParametersException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

