package operations

import (
"openapi/pkg/models/shared")

type ListPermissionSetsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListPermissionSetsXAmzTargetEnum string

const (
    ListPermissionSetsXAmzTargetEnumSwbExternalServiceListPermissionSets ListPermissionSetsXAmzTargetEnum = "SWBExternalService.ListPermissionSets"
)


type ListPermissionSetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListPermissionSetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListPermissionSetsRequest struct {
    QueryParams ListPermissionSetsQueryParams 
    Headers ListPermissionSetsHeaders 
    Request shared.ListPermissionSetsRequest `request:"mediaType=application/json"`
    
}

type ListPermissionSetsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListPermissionSetsResponse *shared.ListPermissionSetsResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

