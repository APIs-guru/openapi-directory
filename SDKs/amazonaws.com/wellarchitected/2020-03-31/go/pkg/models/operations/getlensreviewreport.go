package operations

import (
"openapi/pkg/models/shared")

type GetLensReviewReportPathParams struct {
    LensAlias string `pathParam:"style=simple,explode=false,name=LensAlias"`
    WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
    
}

type GetLensReviewReportQueryParams struct {
    MilestoneNumber *int64 `queryParam:"style=form,explode=true,name=MilestoneNumber"`
    
}

type GetLensReviewReportHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetLensReviewReportRequest struct {
    PathParams GetLensReviewReportPathParams 
    QueryParams GetLensReviewReportQueryParams 
    Headers GetLensReviewReportHeaders 
    
}

type GetLensReviewReportResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetLensReviewReportOutput *shared.GetLensReviewReportOutput 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

