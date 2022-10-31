package operations

import (
"openapi/pkg/models/shared")


type RegisterContainerImageXAmzTargetEnum string

const (
    RegisterContainerImageXAmzTargetEnumLightsail20161128RegisterContainerImage RegisterContainerImageXAmzTargetEnum = "Lightsail_20161128.RegisterContainerImage"
)


type RegisterContainerImageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RegisterContainerImageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RegisterContainerImageRequest struct {
    Headers RegisterContainerImageHeaders 
    Request shared.RegisterContainerImageRequest `request:"mediaType=application/json"`
    
}

type RegisterContainerImageResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    RegisterContainerImageResult *shared.RegisterContainerImageResult 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

