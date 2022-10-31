package operations

import (
"openapi/pkg/models/shared")


type DeleteCollectionXAmzTargetEnum string

const (
    DeleteCollectionXAmzTargetEnumRekognitionServiceDeleteCollection DeleteCollectionXAmzTargetEnum = "RekognitionService.DeleteCollection"
)


type DeleteCollectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteCollectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteCollectionRequest struct {
    Headers DeleteCollectionHeaders 
    Request shared.DeleteCollectionRequest `request:"mediaType=application/json"`
    
}

type DeleteCollectionResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DeleteCollectionResponse *shared.DeleteCollectionResponse 
    InternalServerError *interface{} 
    InvalidParameterException *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

