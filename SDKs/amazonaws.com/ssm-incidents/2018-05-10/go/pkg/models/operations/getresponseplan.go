package operations

import (
"openapi/pkg/models/shared")

type GetResponsePlanQueryParams struct {
    Arn string `queryParam:"style=form,explode=true,name=arn"`
    
}

type GetResponsePlanHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetResponsePlanRequest struct {
    QueryParams GetResponsePlanQueryParams 
    Headers GetResponsePlanHeaders 
    
}

type GetResponsePlanResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetResponsePlanOutput *shared.GetResponsePlanOutput 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

