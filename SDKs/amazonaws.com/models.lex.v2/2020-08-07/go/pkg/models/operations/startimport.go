package operations

import (
"openapi/pkg/models/shared")

type StartImportHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type StartImportRequestBodyMergeStrategyEnum string

const (
    StartImportRequestBodyMergeStrategyEnumOverwrite StartImportRequestBodyMergeStrategyEnum = "Overwrite"
StartImportRequestBodyMergeStrategyEnumFailOnConflict StartImportRequestBodyMergeStrategyEnum = "FailOnConflict"
)


type StartImportRequestBodyResourceSpecification struct {
    BotImportSpecification *shared.BotImportSpecification `json:"botImportSpecification,omitempty"`
    BotLocaleImportSpecification *shared.BotLocaleImportSpecification `json:"botLocaleImportSpecification,omitempty"`
    
}

type StartImportRequestBody struct {
    FilePassword *string `json:"filePassword,omitempty"`
    ImportID string `json:"importId"`
    MergeStrategy StartImportRequestBodyMergeStrategyEnum `json:"mergeStrategy"`
    ResourceSpecification StartImportRequestBodyResourceSpecification `json:"resourceSpecification"`
    
}

type StartImportRequest struct {
    Headers StartImportHeaders 
    Request StartImportRequestBody `request:"mediaType=application/json"`
    
}

type StartImportResponse struct {
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StartImportResponse *shared.StartImportResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

