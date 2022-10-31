package operations

import (
"openapi/pkg/models/shared")


type SearchFacesXAmzTargetEnum string

const (
    SearchFacesXAmzTargetEnumRekognitionServiceSearchFaces SearchFacesXAmzTargetEnum = "RekognitionService.SearchFaces"
)


type SearchFacesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SearchFacesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SearchFacesRequest struct {
    Headers SearchFacesHeaders 
    Request shared.SearchFacesRequest `request:"mediaType=application/json"`
    
}

type SearchFacesResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerError *interface{} 
    InvalidParameterException *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    SearchFacesResponse *shared.SearchFacesResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

