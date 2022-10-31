package operations

import (
"openapi/pkg/models/shared")


type RequestServiceQuotaIncreaseXAmzTargetEnum string

const (
    RequestServiceQuotaIncreaseXAmzTargetEnumServiceQuotasV20190624RequestServiceQuotaIncrease RequestServiceQuotaIncreaseXAmzTargetEnum = "ServiceQuotasV20190624.RequestServiceQuotaIncrease"
)


type RequestServiceQuotaIncreaseHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RequestServiceQuotaIncreaseXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RequestServiceQuotaIncreaseRequest struct {
    Headers RequestServiceQuotaIncreaseHeaders 
    Request shared.RequestServiceQuotaIncreaseRequest `request:"mediaType=application/json"`
    
}

type RequestServiceQuotaIncreaseResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DependencyAccessDeniedException *interface{} 
    IllegalArgumentException *interface{} 
    InvalidResourceStateException *interface{} 
    NoSuchResourceException *interface{} 
    QuotaExceededException *interface{} 
    RequestServiceQuotaIncreaseResponse *shared.RequestServiceQuotaIncreaseResponse 
    ResourceAlreadyExistsException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

