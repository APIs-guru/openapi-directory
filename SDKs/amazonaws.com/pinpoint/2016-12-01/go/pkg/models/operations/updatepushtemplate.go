package operations

import (
"openapi/pkg/models/shared")

type UpdatePushTemplatePathParams struct {
    TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
    
}

type UpdatePushTemplateQueryParams struct {
    CreateNewVersion *bool `queryParam:"style=form,explode=true,name=create-new-version"`
    Version *string `queryParam:"style=form,explode=true,name=version"`
    
}

type UpdatePushTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdatePushTemplateRequestBodyPushNotificationTemplateRequest struct {
    Adm *shared.AndroidPushNotificationTemplate `json:"ADM,omitempty"`
    Apns *shared.ApnsPushNotificationTemplate `json:"APNS,omitempty"`
    Baidu *shared.AndroidPushNotificationTemplate `json:"Baidu,omitempty"`
    Default *shared.DefaultPushNotificationTemplate `json:"Default,omitempty"`
    DefaultSubstitutions *string `json:"DefaultSubstitutions,omitempty"`
    Gcm *shared.AndroidPushNotificationTemplate `json:"GCM,omitempty"`
    RecommenderID *string `json:"RecommenderId,omitempty"`
    TemplateDescription *string `json:"TemplateDescription,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type UpdatePushTemplateRequestBody struct {
    PushNotificationTemplateRequest UpdatePushTemplateRequestBodyPushNotificationTemplateRequest `json:"PushNotificationTemplateRequest"`
    
}

type UpdatePushTemplateRequest struct {
    PathParams UpdatePushTemplatePathParams 
    QueryParams UpdatePushTemplateQueryParams 
    Headers UpdatePushTemplateHeaders 
    Request UpdatePushTemplateRequestBody `request:"mediaType=application/json"`
    
}

type UpdatePushTemplateResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    MethodNotAllowedException *interface{} 
    NotFoundException *interface{} 
    PayloadTooLargeException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UpdatePushTemplateResponse *shared.UpdatePushTemplateResponse 
    
}

