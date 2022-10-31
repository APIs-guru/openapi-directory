package operations

import (
"openapi/pkg/models/shared")


type DetachCertificateFromDistributionXAmzTargetEnum string

const (
    DetachCertificateFromDistributionXAmzTargetEnumLightsail20161128DetachCertificateFromDistribution DetachCertificateFromDistributionXAmzTargetEnum = "Lightsail_20161128.DetachCertificateFromDistribution"
)


type DetachCertificateFromDistributionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DetachCertificateFromDistributionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DetachCertificateFromDistributionRequest struct {
    Headers DetachCertificateFromDistributionHeaders 
    Request shared.DetachCertificateFromDistributionRequest `request:"mediaType=application/json"`
    
}

type DetachCertificateFromDistributionResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DetachCertificateFromDistributionResult *shared.DetachCertificateFromDistributionResult 
    InvalidInputException *interface{} 
    NotFoundException *interface{} 
    OperationFailureException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnauthenticatedException *interface{} 
    
}

