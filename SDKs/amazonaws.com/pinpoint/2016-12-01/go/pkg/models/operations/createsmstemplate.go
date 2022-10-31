package operations

import (
"openapi/pkg/models/shared")

type CreateSmsTemplatePathParams struct {
    TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
    
}

type CreateSmsTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateSmsTemplateRequestBodySmsTemplateRequest struct {
    Body *string `json:"Body,omitempty"`
    DefaultSubstitutions *string `json:"DefaultSubstitutions,omitempty"`
    RecommenderID *string `json:"RecommenderId,omitempty"`
    TemplateDescription *string `json:"TemplateDescription,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type CreateSmsTemplateRequestBody struct {
    SmsTemplateRequest CreateSmsTemplateRequestBodySmsTemplateRequest `json:"SMSTemplateRequest"`
    
}

type CreateSmsTemplateRequest struct {
    PathParams CreateSmsTemplatePathParams 
    Headers CreateSmsTemplateHeaders 
    Request CreateSmsTemplateRequestBody `request:"mediaType=application/json"`
    
}

type CreateSmsTemplateResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    CreateSmsTemplateResponse *shared.CreateSmsTemplateResponse 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    MethodNotAllowedException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

