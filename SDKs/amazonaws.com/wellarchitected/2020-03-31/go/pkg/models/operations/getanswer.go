package operations

import (
"openapi/pkg/models/shared")

type GetAnswerPathParams struct {
    LensAlias string `pathParam:"style=simple,explode=false,name=LensAlias"`
    QuestionID string `pathParam:"style=simple,explode=false,name=QuestionId"`
    WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
    
}

type GetAnswerQueryParams struct {
    MilestoneNumber *int64 `queryParam:"style=form,explode=true,name=MilestoneNumber"`
    
}

type GetAnswerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAnswerRequest struct {
    PathParams GetAnswerPathParams 
    QueryParams GetAnswerQueryParams 
    Headers GetAnswerHeaders 
    
}

type GetAnswerResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetAnswerOutput *shared.GetAnswerOutput 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

