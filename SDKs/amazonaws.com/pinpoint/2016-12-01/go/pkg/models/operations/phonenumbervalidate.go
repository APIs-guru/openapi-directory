package operations

import (
"openapi/pkg/models/shared")

type PhoneNumberValidateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PhoneNumberValidateRequestBodyNumberValidateRequest struct {
    IsoCountryCode *string `json:"IsoCountryCode,omitempty"`
    PhoneNumber *string `json:"PhoneNumber,omitempty"`
    
}

type PhoneNumberValidateRequestBody struct {
    NumberValidateRequest PhoneNumberValidateRequestBodyNumberValidateRequest `json:"NumberValidateRequest"`
    
}

type PhoneNumberValidateRequest struct {
    Headers PhoneNumberValidateHeaders 
    Request PhoneNumberValidateRequestBody `request:"mediaType=application/json"`
    
}

type PhoneNumberValidateResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    MethodNotAllowedException *interface{} 
    NotFoundException *interface{} 
    PayloadTooLargeException *interface{} 
    PhoneNumberValidateResponse *shared.PhoneNumberValidateResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

