package operations

import (
"openapi/pkg/models/shared")


type DeleteProjectVersionXAmzTargetEnum string

const (
    DeleteProjectVersionXAmzTargetEnumRekognitionServiceDeleteProjectVersion DeleteProjectVersionXAmzTargetEnum = "RekognitionService.DeleteProjectVersion"
)


type DeleteProjectVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteProjectVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteProjectVersionRequest struct {
    Headers DeleteProjectVersionHeaders 
    Request shared.DeleteProjectVersionRequest `request:"mediaType=application/json"`
    
}

type DeleteProjectVersionResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DeleteProjectVersionResponse *shared.DeleteProjectVersionResponse 
    InternalServerError *interface{} 
    InvalidParameterException *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

