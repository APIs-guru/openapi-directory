package operations

import (
"openapi/pkg/models/shared")

type GetLensReviewPathParams struct {
    LensAlias string `pathParam:"style=simple,explode=false,name=LensAlias"`
    WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
    
}

type GetLensReviewQueryParams struct {
    MilestoneNumber *int64 `queryParam:"style=form,explode=true,name=MilestoneNumber"`
    
}

type GetLensReviewHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetLensReviewRequest struct {
    PathParams GetLensReviewPathParams 
    QueryParams GetLensReviewQueryParams 
    Headers GetLensReviewHeaders 
    
}

type GetLensReviewResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetLensReviewOutput *shared.GetLensReviewOutput 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

