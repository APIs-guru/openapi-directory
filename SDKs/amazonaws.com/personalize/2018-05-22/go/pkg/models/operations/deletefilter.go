package operations

import (
"openapi/pkg/models/shared")


type DeleteFilterXAmzTargetEnum string

const (
    DeleteFilterXAmzTargetEnumAmazonPersonalizeDeleteFilter DeleteFilterXAmzTargetEnum = "AmazonPersonalize.DeleteFilter"
)


type DeleteFilterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteFilterXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteFilterRequest struct {
    Headers DeleteFilterHeaders 
    Request shared.DeleteFilterRequest `request:"mediaType=application/json"`
    
}

type DeleteFilterResponse struct {
    ContentType string 
    InvalidInputException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

