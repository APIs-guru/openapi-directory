package operations

import (
"openapi/pkg/models/shared")

type CreateMilestonePathParams struct {
    WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
    
}

type CreateMilestoneHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateMilestoneRequestBody struct {
    ClientRequestToken string `json:"ClientRequestToken"`
    MilestoneName string `json:"MilestoneName"`
    
}

type CreateMilestoneRequest struct {
    PathParams CreateMilestonePathParams 
    Headers CreateMilestoneHeaders 
    Request CreateMilestoneRequestBody `request:"mediaType=application/json"`
    
}

type CreateMilestoneResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateMilestoneOutput *shared.CreateMilestoneOutput 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

