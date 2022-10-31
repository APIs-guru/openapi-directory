package operations

import (
"openapi/pkg/models/shared")

type BatchDeleteGeofencePathParams struct {
    CollectionName string `pathParam:"style=simple,explode=false,name=CollectionName"`
    
}

type BatchDeleteGeofenceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type BatchDeleteGeofenceRequestBody struct {
    GeofenceIds []string `json:"GeofenceIds"`
    
}

type BatchDeleteGeofenceRequest struct {
    PathParams BatchDeleteGeofencePathParams 
    Headers BatchDeleteGeofenceHeaders 
    Request BatchDeleteGeofenceRequestBody `request:"mediaType=application/json"`
    
}

type BatchDeleteGeofenceResponse struct {
    AccessDeniedException *interface{} 
    BatchDeleteGeofenceResponse *shared.BatchDeleteGeofenceResponse 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

