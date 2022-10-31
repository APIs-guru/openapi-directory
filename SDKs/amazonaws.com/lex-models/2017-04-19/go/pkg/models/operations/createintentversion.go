package operations

import (
"openapi/pkg/models/shared")

type CreateIntentVersionPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type CreateIntentVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateIntentVersionRequestBody struct {
    Checksum *string `json:"checksum,omitempty"`
    
}

type CreateIntentVersionRequest struct {
    PathParams CreateIntentVersionPathParams 
    Headers CreateIntentVersionHeaders 
    Request CreateIntentVersionRequestBody `request:"mediaType=application/json"`
    
}

type CreateIntentVersionResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateIntentVersionResponse *shared.CreateIntentVersionResponse 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    PreconditionFailedException *interface{} 
    StatusCode int64 
    
}

