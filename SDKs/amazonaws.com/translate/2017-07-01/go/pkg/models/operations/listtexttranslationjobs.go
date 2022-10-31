package operations

import (
"openapi/pkg/models/shared")

type ListTextTranslationJobsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListTextTranslationJobsXAmzTargetEnum string

const (
    ListTextTranslationJobsXAmzTargetEnumAwsShineFrontendService20170701ListTextTranslationJobs ListTextTranslationJobsXAmzTargetEnum = "AWSShineFrontendService_20170701.ListTextTranslationJobs"
)


type ListTextTranslationJobsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListTextTranslationJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListTextTranslationJobsRequest struct {
    QueryParams ListTextTranslationJobsQueryParams 
    Headers ListTextTranslationJobsHeaders 
    Request shared.ListTextTranslationJobsRequest `request:"mediaType=application/json"`
    
}

type ListTextTranslationJobsResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidFilterException *interface{} 
    InvalidRequestException *interface{} 
    ListTextTranslationJobsResponse *shared.ListTextTranslationJobsResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

