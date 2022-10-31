package operations

import (
"openapi/pkg/models/shared")

type StartMigrationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type StartMigrationRequestBodyMigrationStrategyEnum string

const (
    StartMigrationRequestBodyMigrationStrategyEnumCreateNew StartMigrationRequestBodyMigrationStrategyEnum = "CREATE_NEW"
StartMigrationRequestBodyMigrationStrategyEnumUpdateExisting StartMigrationRequestBodyMigrationStrategyEnum = "UPDATE_EXISTING"
)


type StartMigrationRequestBody struct {
    MigrationStrategy StartMigrationRequestBodyMigrationStrategyEnum `json:"migrationStrategy"`
    V1BotName string `json:"v1BotName"`
    V1BotVersion string `json:"v1BotVersion"`
    V2BotName string `json:"v2BotName"`
    V2BotRole string `json:"v2BotRole"`
    
}

type StartMigrationRequest struct {
    Headers StartMigrationHeaders 
    Request StartMigrationRequestBody `request:"mediaType=application/json"`
    
}

type StartMigrationResponse struct {
    AccessDeniedException *interface{} 
    BadRequestException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StartMigrationResponse *shared.StartMigrationResponse 
    StatusCode int64 
    
}

