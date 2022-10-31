package operations

import (
"openapi/pkg/models/shared")

type ListTrainingJobsForHyperParameterTuningJobQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum string

const (
    ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnumSageMakerListTrainingJobsForHyperParameterTuningJob ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum = "SageMaker.ListTrainingJobsForHyperParameterTuningJob"
)


type ListTrainingJobsForHyperParameterTuningJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListTrainingJobsForHyperParameterTuningJobRequest struct {
    QueryParams ListTrainingJobsForHyperParameterTuningJobQueryParams 
    Headers ListTrainingJobsForHyperParameterTuningJobHeaders 
    Request shared.ListTrainingJobsForHyperParameterTuningJobRequest `request:"mediaType=application/json"`
    
}

type ListTrainingJobsForHyperParameterTuningJobResponse struct {
    ContentType string 
    ListTrainingJobsForHyperParameterTuningJobResponse *shared.ListTrainingJobsForHyperParameterTuningJobResponse 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

