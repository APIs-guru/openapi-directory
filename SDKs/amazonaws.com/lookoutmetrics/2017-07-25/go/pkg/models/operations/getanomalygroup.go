package operations

import (
"openapi/pkg/models/shared")

type GetAnomalyGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAnomalyGroupRequestBody struct {
    AnomalyDetectorArn string `json:"AnomalyDetectorArn"`
    AnomalyGroupID string `json:"AnomalyGroupId"`
    
}

type GetAnomalyGroupRequest struct {
    Headers GetAnomalyGroupHeaders 
    Request GetAnomalyGroupRequestBody `request:"mediaType=application/json"`
    
}

type GetAnomalyGroupResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetAnomalyGroupResponse *shared.GetAnomalyGroupResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    ValidationException *interface{} 
    
}

