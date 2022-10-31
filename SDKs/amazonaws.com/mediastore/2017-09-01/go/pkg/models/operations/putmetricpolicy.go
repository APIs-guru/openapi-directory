package operations

import (
"openapi/pkg/models/shared")


type PutMetricPolicyXAmzTargetEnum string

const (
    PutMetricPolicyXAmzTargetEnumMediaStore20170901PutMetricPolicy PutMetricPolicyXAmzTargetEnum = "MediaStore_20170901.PutMetricPolicy"
)


type PutMetricPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutMetricPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutMetricPolicyRequest struct {
    Headers PutMetricPolicyHeaders 
    Request shared.PutMetricPolicyInput `request:"mediaType=application/json"`
    
}

type PutMetricPolicyResponse struct {
    ContainerInUseException *interface{} 
    ContainerNotFoundException *interface{} 
    ContentType string 
    InternalServerError *interface{} 
    PutMetricPolicyOutput map[string]interface{} 
    StatusCode int64 
    
}

