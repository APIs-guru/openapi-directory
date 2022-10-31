package operations

import (
"openapi/pkg/models/shared")

type ListCompilationJobsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListCompilationJobsXAmzTargetEnum string

const (
    ListCompilationJobsXAmzTargetEnumSageMakerListCompilationJobs ListCompilationJobsXAmzTargetEnum = "SageMaker.ListCompilationJobs"
)


type ListCompilationJobsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListCompilationJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListCompilationJobsRequest struct {
    QueryParams ListCompilationJobsQueryParams 
    Headers ListCompilationJobsHeaders 
    Request shared.ListCompilationJobsRequest `request:"mediaType=application/json"`
    
}

type ListCompilationJobsResponse struct {
    ContentType string 
    ListCompilationJobsResponse *shared.ListCompilationJobsResponse 
    StatusCode int64 
    
}

