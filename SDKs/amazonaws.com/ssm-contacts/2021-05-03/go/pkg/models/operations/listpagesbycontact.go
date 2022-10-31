package operations

import (
"openapi/pkg/models/shared")

type ListPagesByContactQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListPagesByContactXAmzTargetEnum string

const (
    ListPagesByContactXAmzTargetEnumSsmContactsListPagesByContact ListPagesByContactXAmzTargetEnum = "SSMContacts.ListPagesByContact"
)


type ListPagesByContactHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListPagesByContactXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListPagesByContactRequest struct {
    QueryParams ListPagesByContactQueryParams 
    Headers ListPagesByContactHeaders 
    Request shared.ListPagesByContactRequest `request:"mediaType=application/json"`
    
}

type ListPagesByContactResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListPagesByContactResult *shared.ListPagesByContactResult 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

