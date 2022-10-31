package operations

import (
"openapi/pkg/models/shared")

type ListDataIngestionJobsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListDataIngestionJobsXAmzTargetEnum string

const (
    ListDataIngestionJobsXAmzTargetEnumAwsLookoutEquipmentFrontendServiceListDataIngestionJobs ListDataIngestionJobsXAmzTargetEnum = "AWSLookoutEquipmentFrontendService.ListDataIngestionJobs"
)


type ListDataIngestionJobsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListDataIngestionJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListDataIngestionJobsRequest struct {
    QueryParams ListDataIngestionJobsQueryParams 
    Headers ListDataIngestionJobsHeaders 
    Request shared.ListDataIngestionJobsRequest `request:"mediaType=application/json"`
    
}

type ListDataIngestionJobsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListDataIngestionJobsResponse *shared.ListDataIngestionJobsResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

