package operations

import (
"openapi/pkg/models/shared")


type DeleteAppImageConfigXAmzTargetEnum string

const (
    DeleteAppImageConfigXAmzTargetEnumSageMakerDeleteAppImageConfig DeleteAppImageConfigXAmzTargetEnum = "SageMaker.DeleteAppImageConfig"
)


type DeleteAppImageConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteAppImageConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteAppImageConfigRequest struct {
    Headers DeleteAppImageConfigHeaders 
    Request shared.DeleteAppImageConfigRequest `request:"mediaType=application/json"`
    
}

type DeleteAppImageConfigResponse struct {
    ContentType string 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

