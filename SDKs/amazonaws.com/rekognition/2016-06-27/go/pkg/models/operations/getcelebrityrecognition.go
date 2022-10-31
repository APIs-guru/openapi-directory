package operations

import (
"openapi/pkg/models/shared")

type GetCelebrityRecognitionQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type GetCelebrityRecognitionXAmzTargetEnum string

const (
    GetCelebrityRecognitionXAmzTargetEnumRekognitionServiceGetCelebrityRecognition GetCelebrityRecognitionXAmzTargetEnum = "RekognitionService.GetCelebrityRecognition"
)


type GetCelebrityRecognitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetCelebrityRecognitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetCelebrityRecognitionRequest struct {
    QueryParams GetCelebrityRecognitionQueryParams 
    Headers GetCelebrityRecognitionHeaders 
    Request shared.GetCelebrityRecognitionRequest `request:"mediaType=application/json"`
    
}

type GetCelebrityRecognitionResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetCelebrityRecognitionResponse *shared.GetCelebrityRecognitionResponse 
    InternalServerError *interface{} 
    InvalidPaginationTokenException *interface{} 
    InvalidParameterException *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

