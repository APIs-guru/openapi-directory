package operations

import (
"openapi/pkg/models/shared")

type CreateContactListHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateContactListRequestBody struct {
    ContactListName string `json:"ContactListName"`
    Description *string `json:"Description,omitempty"`
    Tags []shared.Tag `json:"Tags,omitempty"`
    Topics []shared.Topic `json:"Topics,omitempty"`
    
}

type CreateContactListRequest struct {
    Headers CreateContactListHeaders 
    Request CreateContactListRequestBody `request:"mediaType=application/json"`
    
}

type CreateContactListResponse struct {
    AlreadyExistsException *interface{} 
    BadRequestException *interface{} 
    ContentType string 
    CreateContactListResponse map[string]interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

