package operations

import (
"openapi/pkg/models/shared")


type UpdateArtifactXAmzTargetEnum string

const (
    UpdateArtifactXAmzTargetEnumSageMakerUpdateArtifact UpdateArtifactXAmzTargetEnum = "SageMaker.UpdateArtifact"
)


type UpdateArtifactHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateArtifactXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateArtifactRequest struct {
    Headers UpdateArtifactHeaders 
    Request shared.UpdateArtifactRequest `request:"mediaType=application/json"`
    
}

type UpdateArtifactResponse struct {
    ConflictException *interface{} 
    ContentType string 
    ResourceNotFound *interface{} 
    StatusCode int64 
    UpdateArtifactResponse *shared.UpdateArtifactResponse 
    
}

