package operations

import (
"openapi/pkg/models/shared")


type GenerateTemplateXAmzTargetEnum string

const (
    GenerateTemplateXAmzTargetEnumAwsServerMigrationServiceV20161024GenerateTemplate GenerateTemplateXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.GenerateTemplate"
)


type GenerateTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GenerateTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GenerateTemplateRequest struct {
    Headers GenerateTemplateHeaders 
    Request shared.GenerateTemplateRequest `request:"mediaType=application/json"`
    
}

type GenerateTemplateResponse struct {
    ContentType string 
    GenerateTemplateResponse *shared.GenerateTemplateResponse 
    InternalError *interface{} 
    InvalidParameterException *interface{} 
    MissingRequiredParameterException *interface{} 
    OperationNotPermittedException *interface{} 
    StatusCode int64 
    UnauthorizedOperationException *interface{} 
    
}

