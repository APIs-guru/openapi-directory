package operations

import (
"openapi/pkg/models/shared")


type CreateImageVersionXAmzTargetEnum string

const (
    CreateImageVersionXAmzTargetEnumSageMakerCreateImageVersion CreateImageVersionXAmzTargetEnum = "SageMaker.CreateImageVersion"
)


type CreateImageVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateImageVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateImageVersionRequest struct {
    Headers CreateImageVersionHeaders 
    Request shared.CreateImageVersionRequest `request:"mediaType=application/json"`
    
}

type CreateImageVersionResponse struct {
    ContentType string 
    CreateImageVersionResponse *shared.CreateImageVersionResponse 
    ResourceInUse *interface{} 
    ResourceLimitExceeded *interface{} 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

