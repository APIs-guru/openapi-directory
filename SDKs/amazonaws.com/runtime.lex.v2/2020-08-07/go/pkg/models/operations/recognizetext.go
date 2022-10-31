package operations

import (
"openapi/pkg/models/shared")

type RecognizeTextPathParams struct {
    BotAliasID string `pathParam:"style=simple,explode=false,name=botAliasId"`
    BotID string `pathParam:"style=simple,explode=false,name=botId"`
    LocaleID string `pathParam:"style=simple,explode=false,name=localeId"`
    SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
    
}

type RecognizeTextHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type RecognizeTextRequestBodySessionState struct {
    ActiveContexts []shared.ActiveContext `json:"activeContexts,omitempty"`
    DialogAction *shared.DialogAction `json:"dialogAction,omitempty"`
    Intent *shared.Intent `json:"intent,omitempty"`
    OriginatingRequestID *string `json:"originatingRequestId,omitempty"`
    SessionAttributes map[string]string `json:"sessionAttributes,omitempty"`
    
}

type RecognizeTextRequestBody struct {
    RequestAttributes map[string]string `json:"requestAttributes,omitempty"`
    SessionState *RecognizeTextRequestBodySessionState `json:"sessionState,omitempty"`
    Text string `json:"text"`
    
}

type RecognizeTextRequest struct {
    PathParams RecognizeTextPathParams 
    Headers RecognizeTextHeaders 
    Request RecognizeTextRequestBody `request:"mediaType=application/json"`
    
}

type RecognizeTextResponse struct {
    AccessDeniedException *interface{} 
    BadGatewayException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    DependencyFailedException *interface{} 
    InternalServerException *interface{} 
    RecognizeTextResponse *shared.RecognizeTextResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

