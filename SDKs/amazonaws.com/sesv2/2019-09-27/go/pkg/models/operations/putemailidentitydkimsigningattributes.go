package operations

import (
"openapi/pkg/models/shared")

type PutEmailIdentityDkimSigningAttributesPathParams struct {
    EmailIdentity string `pathParam:"style=simple,explode=false,name=EmailIdentity"`
    
}

type PutEmailIdentityDkimSigningAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes struct {
    DomainSigningPrivateKey *string `json:"DomainSigningPrivateKey,omitempty"`
    DomainSigningSelector *string `json:"DomainSigningSelector,omitempty"`
    
}


type PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum string

const (
    PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnumAwsSes PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum = "AWS_SES"
PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnumExternal PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum = "EXTERNAL"
)


type PutEmailIdentityDkimSigningAttributesRequestBody struct {
    SigningAttributes *PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributes `json:"SigningAttributes,omitempty"`
    SigningAttributesOrigin PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum `json:"SigningAttributesOrigin"`
    
}

type PutEmailIdentityDkimSigningAttributesRequest struct {
    PathParams PutEmailIdentityDkimSigningAttributesPathParams 
    Headers PutEmailIdentityDkimSigningAttributesHeaders 
    Request PutEmailIdentityDkimSigningAttributesRequestBody `request:"mediaType=application/json"`
    
}

type PutEmailIdentityDkimSigningAttributesResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    NotFoundException *interface{} 
    PutEmailIdentityDkimSigningAttributesResponse *shared.PutEmailIdentityDkimSigningAttributesResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

