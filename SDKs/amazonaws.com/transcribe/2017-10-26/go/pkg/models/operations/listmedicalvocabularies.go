package operations

import (
"openapi/pkg/models/shared")

type ListMedicalVocabulariesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListMedicalVocabulariesXAmzTargetEnum string

const (
    ListMedicalVocabulariesXAmzTargetEnumTranscribeListMedicalVocabularies ListMedicalVocabulariesXAmzTargetEnum = "Transcribe.ListMedicalVocabularies"
)


type ListMedicalVocabulariesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListMedicalVocabulariesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListMedicalVocabulariesRequest struct {
    QueryParams ListMedicalVocabulariesQueryParams 
    Headers ListMedicalVocabulariesHeaders 
    Request shared.ListMedicalVocabulariesRequest `request:"mediaType=application/json"`
    
}

type ListMedicalVocabulariesResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    ListMedicalVocabulariesResponse *shared.ListMedicalVocabulariesResponse 
    StatusCode int64 
    
}

