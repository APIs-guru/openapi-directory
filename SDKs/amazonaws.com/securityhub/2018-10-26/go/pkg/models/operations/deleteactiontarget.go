package operations

import (
"openapi/pkg/models/shared")

type DeleteActionTargetPathParams struct {
    ActionTargetArn string `pathParam:"style=simple,explode=false,name=ActionTargetArn"`
    
}

type DeleteActionTargetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteActionTargetRequest struct {
    PathParams DeleteActionTargetPathParams 
    Headers DeleteActionTargetHeaders 
    
}

type DeleteActionTargetResponse struct {
    ContentType string 
    DeleteActionTargetResponse *shared.DeleteActionTargetResponse 
    InternalException *interface{} 
    InvalidAccessException *interface{} 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

