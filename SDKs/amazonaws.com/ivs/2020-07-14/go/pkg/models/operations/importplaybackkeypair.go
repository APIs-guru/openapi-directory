package operations

import (
"openapi/pkg/models/shared")

type ImportPlaybackKeyPairHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ImportPlaybackKeyPairRequestBody struct {
    Name *string `json:"name,omitempty"`
    PublicKeyMaterial string `json:"publicKeyMaterial"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type ImportPlaybackKeyPairRequest struct {
    Headers ImportPlaybackKeyPairHeaders 
    Request ImportPlaybackKeyPairRequestBody `request:"mediaType=application/json"`
    
}

type ImportPlaybackKeyPairResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    ImportPlaybackKeyPairResponse *shared.ImportPlaybackKeyPairResponse 
    PendingVerification *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

