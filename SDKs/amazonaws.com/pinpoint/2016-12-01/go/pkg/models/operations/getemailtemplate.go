package operations

import (
"openapi/pkg/models/shared")

type GetEmailTemplatePathParams struct {
    TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
    
}

type GetEmailTemplateQueryParams struct {
    Version *string `queryParam:"style=form,explode=true,name=version"`
    
}

type GetEmailTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetEmailTemplateRequest struct {
    PathParams GetEmailTemplatePathParams 
    QueryParams GetEmailTemplateQueryParams 
    Headers GetEmailTemplateHeaders 
    
}

type GetEmailTemplateResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    ForbiddenException *interface{} 
    GetEmailTemplateResponse *shared.GetEmailTemplateResponse 
    InternalServerErrorException *interface{} 
    MethodNotAllowedException *interface{} 
    NotFoundException *interface{} 
    PayloadTooLargeException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

