package operations

import (
"openapi/pkg/models/shared")


type UpdateAppImageConfigXAmzTargetEnum string

const (
    UpdateAppImageConfigXAmzTargetEnumSageMakerUpdateAppImageConfig UpdateAppImageConfigXAmzTargetEnum = "SageMaker.UpdateAppImageConfig"
)


type UpdateAppImageConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateAppImageConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateAppImageConfigRequest struct {
    Headers UpdateAppImageConfigHeaders 
    Request shared.UpdateAppImageConfigRequest `request:"mediaType=application/json"`
    
}

type UpdateAppImageConfigResponse struct {
    ContentType string 
    ResourceNotFound *interface{} 
    StatusCode int64 
    UpdateAppImageConfigResponse *shared.UpdateAppImageConfigResponse 
    
}

