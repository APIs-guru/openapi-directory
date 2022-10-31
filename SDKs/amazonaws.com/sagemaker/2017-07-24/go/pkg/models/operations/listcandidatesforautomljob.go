package operations

import (
"openapi/pkg/models/shared")

type ListCandidatesForAutoMlJobQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListCandidatesForAutoMlJobXAmzTargetEnum string

const (
    ListCandidatesForAutoMlJobXAmzTargetEnumSageMakerListCandidatesForAutoMlJob ListCandidatesForAutoMlJobXAmzTargetEnum = "SageMaker.ListCandidatesForAutoMLJob"
)


type ListCandidatesForAutoMlJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListCandidatesForAutoMlJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListCandidatesForAutoMlJobRequest struct {
    QueryParams ListCandidatesForAutoMlJobQueryParams 
    Headers ListCandidatesForAutoMlJobHeaders 
    Request shared.ListCandidatesForAutoMlJobRequest `request:"mediaType=application/json"`
    
}

type ListCandidatesForAutoMlJobResponse struct {
    ContentType string 
    ListCandidatesForAutoMlJobResponse *shared.ListCandidatesForAutoMlJobResponse 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

