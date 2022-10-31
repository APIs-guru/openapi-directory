package operations

import (
"openapi/pkg/models/shared")

type StartChangeSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type StartChangeSetRequestBody struct {
    Catalog string `json:"Catalog"`
    ChangeSet []shared.Change `json:"ChangeSet"`
    ChangeSetName *string `json:"ChangeSetName,omitempty"`
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    
}

type StartChangeSetRequest struct {
    Headers StartChangeSetHeaders 
    Request StartChangeSetRequestBody `request:"mediaType=application/json"`
    
}

type StartChangeSetResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServiceException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StartChangeSetResponse *shared.StartChangeSetResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

