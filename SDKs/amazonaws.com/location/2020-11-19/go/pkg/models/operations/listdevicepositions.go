package operations

import (
"openapi/pkg/models/shared")

type ListDevicePositionsPathParams struct {
    TrackerName string `pathParam:"style=simple,explode=false,name=TrackerName"`
    
}

type ListDevicePositionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListDevicePositionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListDevicePositionsRequestBody struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

type ListDevicePositionsRequest struct {
    PathParams ListDevicePositionsPathParams 
    QueryParams ListDevicePositionsQueryParams 
    Headers ListDevicePositionsHeaders 
    Request ListDevicePositionsRequestBody `request:"mediaType=application/json"`
    
}

type ListDevicePositionsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListDevicePositionsResponse *shared.ListDevicePositionsResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

