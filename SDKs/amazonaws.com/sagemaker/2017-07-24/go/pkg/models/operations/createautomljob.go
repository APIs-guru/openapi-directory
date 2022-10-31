package operations

import (
"openapi/pkg/models/shared")


type CreateAutoMlJobXAmzTargetEnum string

const (
    CreateAutoMlJobXAmzTargetEnumSageMakerCreateAutoMlJob CreateAutoMlJobXAmzTargetEnum = "SageMaker.CreateAutoMLJob"
)


type CreateAutoMlJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateAutoMlJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateAutoMlJobRequest struct {
    Headers CreateAutoMlJobHeaders 
    Request shared.CreateAutoMlJobRequest `request:"mediaType=application/json"`
    
}

type CreateAutoMlJobResponse struct {
    ContentType string 
    CreateAutoMlJobResponse *shared.CreateAutoMlJobResponse 
    ResourceInUse *interface{} 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    
}

