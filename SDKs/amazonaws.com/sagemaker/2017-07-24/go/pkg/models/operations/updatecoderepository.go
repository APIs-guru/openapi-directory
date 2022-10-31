package operations

import (
"openapi/pkg/models/shared")


type UpdateCodeRepositoryXAmzTargetEnum string

const (
    UpdateCodeRepositoryXAmzTargetEnumSageMakerUpdateCodeRepository UpdateCodeRepositoryXAmzTargetEnum = "SageMaker.UpdateCodeRepository"
)


type UpdateCodeRepositoryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateCodeRepositoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateCodeRepositoryRequest struct {
    Headers UpdateCodeRepositoryHeaders 
    Request shared.UpdateCodeRepositoryInput `request:"mediaType=application/json"`
    
}

type UpdateCodeRepositoryResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateCodeRepositoryOutput *shared.UpdateCodeRepositoryOutput 
    
}

