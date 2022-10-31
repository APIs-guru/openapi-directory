package operations

import (
"openapi/pkg/models/shared")

type UpdateFindingsFilterPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateFindingsFilterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type UpdateFindingsFilterRequestBodyActionEnum string

const (
    UpdateFindingsFilterRequestBodyActionEnumArchive UpdateFindingsFilterRequestBodyActionEnum = "ARCHIVE"
UpdateFindingsFilterRequestBodyActionEnumNoop UpdateFindingsFilterRequestBodyActionEnum = "NOOP"
)


type UpdateFindingsFilterRequestBodyFindingCriteria struct {
    Criterion map[string]shared.CriterionAdditionalProperties `json:"criterion,omitempty"`
    
}

type UpdateFindingsFilterRequestBody struct {
    Action *UpdateFindingsFilterRequestBodyActionEnum `json:"action,omitempty"`
    ClientToken *string `json:"clientToken,omitempty"`
    Description *string `json:"description,omitempty"`
    FindingCriteria *UpdateFindingsFilterRequestBodyFindingCriteria `json:"findingCriteria,omitempty"`
    Name *string `json:"name,omitempty"`
    Position *int64 `json:"position,omitempty"`
    
}

type UpdateFindingsFilterRequest struct {
    PathParams UpdateFindingsFilterPathParams 
    Headers UpdateFindingsFilterHeaders 
    Request UpdateFindingsFilterRequestBody `request:"mediaType=application/json"`
    
}

type UpdateFindingsFilterResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateFindingsFilterResponse *shared.UpdateFindingsFilterResponse 
    ValidationException *interface{} 
    
}

