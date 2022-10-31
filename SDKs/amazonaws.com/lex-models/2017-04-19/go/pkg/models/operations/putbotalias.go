package operations

import (
"openapi/pkg/models/shared")

type PutBotAliasPathParams struct {
    BotName string `pathParam:"style=simple,explode=false,name=botName"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type PutBotAliasHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PutBotAliasRequestBodyConversationLogs struct {
    IamRoleArn *string `json:"iamRoleArn,omitempty"`
    LogSettings []shared.LogSettingsRequest `json:"logSettings,omitempty"`
    
}

type PutBotAliasRequestBody struct {
    BotVersion string `json:"botVersion"`
    Checksum *string `json:"checksum,omitempty"`
    ConversationLogs *PutBotAliasRequestBodyConversationLogs `json:"conversationLogs,omitempty"`
    Description *string `json:"description,omitempty"`
    Tags []shared.Tag `json:"tags,omitempty"`
    
}

type PutBotAliasRequest struct {
    PathParams PutBotAliasPathParams 
    Headers PutBotAliasHeaders 
    Request PutBotAliasRequestBody `request:"mediaType=application/json"`
    
}

type PutBotAliasResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    PreconditionFailedException *interface{} 
    PutBotAliasResponse *shared.PutBotAliasResponse 
    StatusCode int64 
    
}

