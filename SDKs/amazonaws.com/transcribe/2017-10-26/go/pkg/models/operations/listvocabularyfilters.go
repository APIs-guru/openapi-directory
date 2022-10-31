package operations

import (
"openapi/pkg/models/shared")

type ListVocabularyFiltersQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListVocabularyFiltersXAmzTargetEnum string

const (
    ListVocabularyFiltersXAmzTargetEnumTranscribeListVocabularyFilters ListVocabularyFiltersXAmzTargetEnum = "Transcribe.ListVocabularyFilters"
)


type ListVocabularyFiltersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListVocabularyFiltersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListVocabularyFiltersRequest struct {
    QueryParams ListVocabularyFiltersQueryParams 
    Headers ListVocabularyFiltersHeaders 
    Request shared.ListVocabularyFiltersRequest `request:"mediaType=application/json"`
    
}

type ListVocabularyFiltersResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    ListVocabularyFiltersResponse *shared.ListVocabularyFiltersResponse 
    StatusCode int64 
    
}

