package operations

import (
"openapi/pkg/models/shared")


type IndexFacesXAmzTargetEnum string

const (
    IndexFacesXAmzTargetEnumRekognitionServiceIndexFaces IndexFacesXAmzTargetEnum = "RekognitionService.IndexFaces"
)


type IndexFacesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget IndexFacesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type IndexFacesRequest struct {
    Headers IndexFacesHeaders 
    Request shared.IndexFacesRequest `request:"mediaType=application/json"`
    
}

type IndexFacesResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    ImageTooLargeException *interface{} 
    IndexFacesResponse *shared.IndexFacesResponse 
    InternalServerError *interface{} 
    InvalidImageFormatException *interface{} 
    InvalidParameterException *interface{} 
    InvalidS3ObjectException *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

