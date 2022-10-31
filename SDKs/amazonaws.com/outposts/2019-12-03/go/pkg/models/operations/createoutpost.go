package operations

import (
"openapi/pkg/models/shared")

type CreateOutpostHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateOutpostRequestBody struct {
    AvailabilityZone *string `json:"AvailabilityZone,omitempty"`
    AvailabilityZoneID *string `json:"AvailabilityZoneId,omitempty"`
    Description *string `json:"Description,omitempty"`
    Name string `json:"Name"`
    SiteID string `json:"SiteId"`
    Tags map[string]string `json:"Tags,omitempty"`
    
}

type CreateOutpostRequest struct {
    Headers CreateOutpostHeaders 
    Request CreateOutpostRequestBody `request:"mediaType=application/json"`
    
}

type CreateOutpostResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateOutpostOutput *shared.CreateOutpostOutput 
    InternalServerException *interface{} 
    NotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

