package operations

import (
"openapi/pkg/models/shared")


type GetMetricPolicyXAmzTargetEnum string

const (
    GetMetricPolicyXAmzTargetEnumMediaStore20170901GetMetricPolicy GetMetricPolicyXAmzTargetEnum = "MediaStore_20170901.GetMetricPolicy"
)


type GetMetricPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetMetricPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetMetricPolicyRequest struct {
    Headers GetMetricPolicyHeaders 
    Request shared.GetMetricPolicyInput `request:"mediaType=application/json"`
    
}

type GetMetricPolicyResponse struct {
    ContainerInUseException *interface{} 
    ContainerNotFoundException *interface{} 
    ContentType string 
    GetMetricPolicyOutput *shared.GetMetricPolicyOutput 
    InternalServerError *interface{} 
    PolicyNotFoundException *interface{} 
    StatusCode int64 
    
}

