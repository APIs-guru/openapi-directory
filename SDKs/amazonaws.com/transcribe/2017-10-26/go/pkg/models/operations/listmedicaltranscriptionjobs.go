package operations

import (
"openapi/pkg/models/shared")

type ListMedicalTranscriptionJobsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListMedicalTranscriptionJobsXAmzTargetEnum string

const (
    ListMedicalTranscriptionJobsXAmzTargetEnumTranscribeListMedicalTranscriptionJobs ListMedicalTranscriptionJobsXAmzTargetEnum = "Transcribe.ListMedicalTranscriptionJobs"
)


type ListMedicalTranscriptionJobsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListMedicalTranscriptionJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListMedicalTranscriptionJobsRequest struct {
    QueryParams ListMedicalTranscriptionJobsQueryParams 
    Headers ListMedicalTranscriptionJobsHeaders 
    Request shared.ListMedicalTranscriptionJobsRequest `request:"mediaType=application/json"`
    
}

type ListMedicalTranscriptionJobsResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    ListMedicalTranscriptionJobsResponse *shared.ListMedicalTranscriptionJobsResponse 
    StatusCode int64 
    
}

