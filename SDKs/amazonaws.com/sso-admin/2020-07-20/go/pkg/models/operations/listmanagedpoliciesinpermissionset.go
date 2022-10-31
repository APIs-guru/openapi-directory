package operations

import (
"openapi/pkg/models/shared")

type ListManagedPoliciesInPermissionSetQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListManagedPoliciesInPermissionSetXAmzTargetEnum string

const (
    ListManagedPoliciesInPermissionSetXAmzTargetEnumSwbExternalServiceListManagedPoliciesInPermissionSet ListManagedPoliciesInPermissionSetXAmzTargetEnum = "SWBExternalService.ListManagedPoliciesInPermissionSet"
)


type ListManagedPoliciesInPermissionSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListManagedPoliciesInPermissionSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListManagedPoliciesInPermissionSetRequest struct {
    QueryParams ListManagedPoliciesInPermissionSetQueryParams 
    Headers ListManagedPoliciesInPermissionSetHeaders 
    Request shared.ListManagedPoliciesInPermissionSetRequest `request:"mediaType=application/json"`
    
}

type ListManagedPoliciesInPermissionSetResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListManagedPoliciesInPermissionSetResponse *shared.ListManagedPoliciesInPermissionSetResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

