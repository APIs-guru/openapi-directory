package operations

import (
"openapi/pkg/models/shared")


type DescribeClustersXAmzTargetEnum string

const (
    DescribeClustersXAmzTargetEnumAmazonMemoryDbDescribeClusters DescribeClustersXAmzTargetEnum = "AmazonMemoryDB.DescribeClusters"
)


type DescribeClustersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeClustersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeClustersRequest struct {
    Headers DescribeClustersHeaders 
    Request shared.DescribeClustersRequest `request:"mediaType=application/json"`
    
}

type DescribeClustersResponse struct {
    ClusterNotFoundFault *interface{} 
    ContentType string 
    DescribeClustersResponse *shared.DescribeClustersResponse 
    InvalidParameterCombinationException *interface{} 
    InvalidParameterValueException *interface{} 
    ServiceLinkedRoleNotFoundFault *interface{} 
    StatusCode int64 
    
}

