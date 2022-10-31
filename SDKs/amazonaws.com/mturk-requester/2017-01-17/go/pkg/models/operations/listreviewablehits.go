package operations

import (
"openapi/pkg/models/shared")

type ListReviewableHiTsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListReviewableHiTsXAmzTargetEnum string

const (
    ListReviewableHiTsXAmzTargetEnumMTurkRequesterServiceV20170117ListReviewableHiTs ListReviewableHiTsXAmzTargetEnum = "MTurkRequesterServiceV20170117.ListReviewableHITs"
)


type ListReviewableHiTsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListReviewableHiTsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListReviewableHiTsRequest struct {
    QueryParams ListReviewableHiTsQueryParams 
    Headers ListReviewableHiTsHeaders 
    Request shared.ListReviewableHiTsRequest `request:"mediaType=application/json"`
    
}

type ListReviewableHiTsResponse struct {
    ContentType string 
    ListReviewableHiTsResponse *shared.ListReviewableHiTsResponse 
    RequestError *interface{} 
    ServiceFault *interface{} 
    StatusCode int64 
    
}

