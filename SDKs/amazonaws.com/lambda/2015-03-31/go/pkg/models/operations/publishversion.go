package operations

import (
"openapi/pkg/models/shared")

type PublishVersionPathParams struct {
    FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
    
}

type PublishVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PublishVersionRequestBody struct {
    CodeSha256 *string `json:"CodeSha256,omitempty"`
    Description *string `json:"Description,omitempty"`
    RevisionID *string `json:"RevisionId,omitempty"`
    
}

type PublishVersionRequest struct {
    PathParams PublishVersionPathParams 
    Headers PublishVersionHeaders 
    Request PublishVersionRequestBody `request:"mediaType=application/json"`
    
}

type PublishVersionResponse struct {
    CodeStorageExceededException *interface{} 
    ContentType string 
    FunctionConfiguration *shared.FunctionConfiguration 
    InvalidParameterValueException *interface{} 
    PreconditionFailedException *interface{} 
    ResourceConflictException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

