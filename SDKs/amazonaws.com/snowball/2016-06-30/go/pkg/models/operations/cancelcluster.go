package operations

import (
"openapi/pkg/models/shared")


type CancelClusterXAmzTargetEnum string

const (
    CancelClusterXAmzTargetEnumAwsieSnowballJobManagementServiceCancelCluster CancelClusterXAmzTargetEnum = "AWSIESnowballJobManagementService.CancelCluster"
)


type CancelClusterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CancelClusterXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CancelClusterRequest struct {
    Headers CancelClusterHeaders 
    Request shared.CancelClusterRequest `request:"mediaType=application/json"`
    
}

type CancelClusterResponse struct {
    CancelClusterResult map[string]interface{} 
    ContentType string 
    InvalidJobStateException *interface{} 
    InvalidResourceException *interface{} 
    KmsRequestFailedException *interface{} 
    StatusCode int64 
    
}

