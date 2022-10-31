package operations

import (
"openapi/pkg/models/shared")


type GetCertificatesXAmzTargetEnum string

const (
    GetCertificatesXAmzTargetEnumLightsail20161128GetCertificates GetCertificatesXAmzTargetEnum = "Lightsail_20161128.GetCertificates"
)


type GetCertificatesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetCertificatesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetCertificatesRequest struct {
    Headers GetCertificatesHeaders 
    Request shared.GetCertificatesRequest `request:"mediaType=application/json"`
    
}

type GetCertificatesResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetCertificatesResult *shared.GetCertificatesResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

