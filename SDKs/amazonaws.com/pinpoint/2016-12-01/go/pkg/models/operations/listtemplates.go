package operations

import (
"openapi/pkg/models/shared")

type ListTemplatesQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=next-token"`
    PageSize *string `queryParam:"style=form,explode=true,name=page-size"`
    Prefix *string `queryParam:"style=form,explode=true,name=prefix"`
    TemplateType *string `queryParam:"style=form,explode=true,name=template-type"`
    
}

type ListTemplatesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListTemplatesRequest struct {
    QueryParams ListTemplatesQueryParams 
    Headers ListTemplatesHeaders 
    
}

type ListTemplatesResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    ListTemplatesResponse *shared.ListTemplatesResponse 
    MethodNotAllowedException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

