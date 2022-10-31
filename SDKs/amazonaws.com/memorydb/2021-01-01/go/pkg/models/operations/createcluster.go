package operations

import (
"openapi/pkg/models/shared")


type CreateClusterXAmzTargetEnum string

const (
    CreateClusterXAmzTargetEnumAmazonMemoryDbCreateCluster CreateClusterXAmzTargetEnum = "AmazonMemoryDB.CreateCluster"
)


type CreateClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateClusterXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateClusterRequest struct {
    Headers CreateClusterHeaders 
    Request shared.CreateClusterRequest `request:"mediaType=application/json"`
    
}

type CreateClusterResponse struct {
    ACLNotFoundFault *interface{} 
    ClusterAlreadyExistsFault *interface{} 
    ClusterQuotaForCustomerExceededFault *interface{} 
    ContentType string 
    CreateClusterResponse *shared.CreateClusterResponse 
    InsufficientClusterCapacityFault *interface{} 
    InvalidACLStateFault *interface{} 
    InvalidCredentialsException *interface{} 
    InvalidParameterCombinationException *interface{} 
    InvalidParameterValueException *interface{} 
    InvalidVpcNetworkStateFault *interface{} 
    NodeQuotaForClusterExceededFault *interface{} 
    NodeQuotaForCustomerExceededFault *interface{} 
    ParameterGroupNotFoundFault *interface{} 
    ServiceLinkedRoleNotFoundFault *interface{} 
    ShardsPerClusterQuotaExceededFault *interface{} 
    StatusCode int64 
    SubnetGroupNotFoundFault *interface{} 
    TagQuotaPerResourceExceeded *interface{} 
    
}

