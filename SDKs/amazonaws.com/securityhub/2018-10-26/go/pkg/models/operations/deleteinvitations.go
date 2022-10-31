package operations

import (
"openapi/pkg/models/shared")

type DeleteInvitationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteInvitationsRequestBody struct {
    AccountIds []string `json:"AccountIds"`
    
}

type DeleteInvitationsRequest struct {
    Headers DeleteInvitationsHeaders 
    Request DeleteInvitationsRequestBody `request:"mediaType=application/json"`
    
}

type DeleteInvitationsResponse struct {
    ContentType string 
    DeleteInvitationsResponse *shared.DeleteInvitationsResponse 
    InternalException *interface{} 
    InvalidAccessException *interface{} 
    InvalidInputException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

