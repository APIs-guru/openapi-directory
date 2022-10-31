package operations

import (
"openapi/pkg/models/shared")


type DeleteMetricPolicyXAmzTargetEnum string

const (
    DeleteMetricPolicyXAmzTargetEnumMediaStore20170901DeleteMetricPolicy DeleteMetricPolicyXAmzTargetEnum = "MediaStore_20170901.DeleteMetricPolicy"
)


type DeleteMetricPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteMetricPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteMetricPolicyRequest struct {
    Headers DeleteMetricPolicyHeaders 
    Request shared.DeleteMetricPolicyInput `request:"mediaType=application/json"`
    
}

type DeleteMetricPolicyResponse struct {
    ContainerInUseException *interface{} 
    ContainerNotFoundException *interface{} 
    ContentType string 
    DeleteMetricPolicyOutput map[string]interface{} 
    InternalServerError *interface{} 
    PolicyNotFoundException *interface{} 
    StatusCode int64 
    
}

