package operations



type CreateEmailTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateEmailTemplateRequestBodyTemplateContent struct {
    HTML *string `json:"Html,omitempty"`
    Subject *string `json:"Subject,omitempty"`
    Text *string `json:"Text,omitempty"`
    
}

type CreateEmailTemplateRequestBody struct {
    TemplateContent CreateEmailTemplateRequestBodyTemplateContent `json:"TemplateContent"`
    TemplateName string `json:"TemplateName"`
    
}

type CreateEmailTemplateRequest struct {
    Headers CreateEmailTemplateHeaders 
    Request CreateEmailTemplateRequestBody `request:"mediaType=application/json"`
    
}

type CreateEmailTemplateResponse struct {
    AlreadyExistsException *interface{} 
    BadRequestException *interface{} 
    ContentType string 
    CreateEmailTemplateResponse map[string]interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

