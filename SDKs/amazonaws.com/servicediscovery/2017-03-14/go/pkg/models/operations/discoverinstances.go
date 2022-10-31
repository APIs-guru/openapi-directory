package operations

import (
"openapi/pkg/models/shared")


type DiscoverInstancesXAmzTargetEnum string

const (
    DiscoverInstancesXAmzTargetEnumRoute53AutoNamingV20170314DiscoverInstances DiscoverInstancesXAmzTargetEnum = "Route53AutoNaming_v20170314.DiscoverInstances"
)


type DiscoverInstancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DiscoverInstancesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DiscoverInstancesRequest struct {
    Headers DiscoverInstancesHeaders 
    Request shared.DiscoverInstancesRequest `request:"mediaType=application/json"`
    
}

type DiscoverInstancesResponse struct {
    ContentType string 
    DiscoverInstancesResponse *shared.DiscoverInstancesResponse 
    InvalidInput *interface{} 
    NamespaceNotFound *interface{} 
    RequestLimitExceeded *interface{} 
    ServiceNotFound *interface{} 
    StatusCode int64 
    
}

