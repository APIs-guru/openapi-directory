package operations

import (
"openapi/pkg/models/shared")


type GetNamespaceDeletionStatusXAmzTargetEnum string

const (
    GetNamespaceDeletionStatusXAmzTargetEnumIotThingsGraphFrontEndServiceGetNamespaceDeletionStatus GetNamespaceDeletionStatusXAmzTargetEnum = "IotThingsGraphFrontEndService.GetNamespaceDeletionStatus"
)


type GetNamespaceDeletionStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetNamespaceDeletionStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetNamespaceDeletionStatusRequest struct {
    Headers GetNamespaceDeletionStatusHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type GetNamespaceDeletionStatusResponse struct {
    ContentType string 
    GetNamespaceDeletionStatusResponse *shared.GetNamespaceDeletionStatusResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

