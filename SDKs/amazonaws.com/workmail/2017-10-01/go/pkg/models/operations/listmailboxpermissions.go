package operations

import (
"openapi/pkg/models/shared")

type ListMailboxPermissionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListMailboxPermissionsXAmzTargetEnum string

const (
    ListMailboxPermissionsXAmzTargetEnumWorkMailServiceListMailboxPermissions ListMailboxPermissionsXAmzTargetEnum = "WorkMailService.ListMailboxPermissions"
)


type ListMailboxPermissionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListMailboxPermissionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListMailboxPermissionsRequest struct {
    QueryParams ListMailboxPermissionsQueryParams 
    Headers ListMailboxPermissionsHeaders 
    Request shared.ListMailboxPermissionsRequest `request:"mediaType=application/json"`
    
}

type ListMailboxPermissionsResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    InvalidParameterException *interface{} 
    ListMailboxPermissionsResponse *shared.ListMailboxPermissionsResponse 
    OrganizationNotFoundException *interface{} 
    OrganizationStateException *interface{} 
    StatusCode int64 
    
}

