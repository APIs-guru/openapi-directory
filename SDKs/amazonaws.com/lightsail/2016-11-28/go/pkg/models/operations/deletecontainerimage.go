package operations

import (
"openapi/pkg/models/shared")


type DeleteContainerImageXAmzTargetEnum string

const (
    DeleteContainerImageXAmzTargetEnumLightsail20161128DeleteContainerImage DeleteContainerImageXAmzTargetEnum = "Lightsail_20161128.DeleteContainerImage"
)


type DeleteContainerImageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteContainerImageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteContainerImageRequest struct {
    Headers DeleteContainerImageHeaders 
    Request shared.DeleteContainerImageRequest `request:"mediaType=application/json"`
    
}

type DeleteContainerImageResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DeleteContainerImageResult map[string]interface{} 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

