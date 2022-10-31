package operations

import (
"openapi/pkg/models/shared")

type ListAccountAssignmentCreationStatusQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListAccountAssignmentCreationStatusXAmzTargetEnum string

const (
    ListAccountAssignmentCreationStatusXAmzTargetEnumSwbExternalServiceListAccountAssignmentCreationStatus ListAccountAssignmentCreationStatusXAmzTargetEnum = "SWBExternalService.ListAccountAssignmentCreationStatus"
)


type ListAccountAssignmentCreationStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListAccountAssignmentCreationStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListAccountAssignmentCreationStatusRequest struct {
    QueryParams ListAccountAssignmentCreationStatusQueryParams 
    Headers ListAccountAssignmentCreationStatusHeaders 
    Request shared.ListAccountAssignmentCreationStatusRequest `request:"mediaType=application/json"`
    
}

type ListAccountAssignmentCreationStatusResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListAccountAssignmentCreationStatusResponse *shared.ListAccountAssignmentCreationStatusResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

