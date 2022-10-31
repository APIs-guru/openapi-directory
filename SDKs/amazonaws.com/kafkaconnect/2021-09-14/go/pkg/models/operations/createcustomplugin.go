package operations

import (
"openapi/pkg/models/shared")

type CreateCustomPluginHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type CreateCustomPluginRequestBodyContentTypeEnum string

const (
    CreateCustomPluginRequestBodyContentTypeEnumJar CreateCustomPluginRequestBodyContentTypeEnum = "JAR"
CreateCustomPluginRequestBodyContentTypeEnumZip CreateCustomPluginRequestBodyContentTypeEnum = "ZIP"
)


type CreateCustomPluginRequestBodyLocation struct {
    S3Location *shared.S3Location `json:"s3Location,omitempty"`
    
}

type CreateCustomPluginRequestBody struct {
    ContentType CreateCustomPluginRequestBodyContentTypeEnum `json:"contentType"`
    Description *string `json:"description,omitempty"`
    Location CreateCustomPluginRequestBodyLocation `json:"location"`
    Name string `json:"name"`
    
}

type CreateCustomPluginRequest struct {
    Headers CreateCustomPluginHeaders 
    Request CreateCustomPluginRequestBody `request:"mediaType=application/json"`
    
}

type CreateCustomPluginResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateCustomPluginResponse *shared.CreateCustomPluginResponse 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    NotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

