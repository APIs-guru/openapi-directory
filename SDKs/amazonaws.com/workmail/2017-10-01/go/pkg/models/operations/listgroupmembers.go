package operations

import (
"openapi/pkg/models/shared")

type ListGroupMembersQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListGroupMembersXAmzTargetEnum string

const (
    ListGroupMembersXAmzTargetEnumWorkMailServiceListGroupMembers ListGroupMembersXAmzTargetEnum = "WorkMailService.ListGroupMembers"
)


type ListGroupMembersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListGroupMembersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListGroupMembersRequest struct {
    QueryParams ListGroupMembersQueryParams 
    Headers ListGroupMembersHeaders 
    Request shared.ListGroupMembersRequest `request:"mediaType=application/json"`
    
}

type ListGroupMembersResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    EntityStateException *interface{} 
    InvalidParameterException *interface{} 
    ListGroupMembersResponse *shared.ListGroupMembersResponse 
    OrganizationNotFoundException *interface{} 
    OrganizationStateException *interface{} 
    StatusCode int64 
    
}

