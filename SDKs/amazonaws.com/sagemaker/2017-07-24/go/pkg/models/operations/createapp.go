package operations

import (
"openapi/pkg/models/shared")


type CreateAppXAmzTargetEnum string

const (
    CreateAppXAmzTargetEnumSageMakerCreateApp CreateAppXAmzTargetEnum = "SageMaker.CreateApp"
)


type CreateAppHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateAppXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateAppRequest struct {
    Headers CreateAppHeaders 
    Request shared.CreateAppRequest `request:"mediaType=application/json"`
    
}

type CreateAppResponse struct {
    ContentType string 
    CreateAppResponse *shared.CreateAppResponse 
    ResourceInUse *interface{} 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    
}

