package operations

import (
"openapi/pkg/models/shared")


type PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnum string

const (
    PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnumServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplate PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnum = "ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate"
)


type PutServiceQuotaIncreaseRequestIntoTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutServiceQuotaIncreaseRequestIntoTemplateRequest struct {
    Headers PutServiceQuotaIncreaseRequestIntoTemplateHeaders 
    Request shared.PutServiceQuotaIncreaseRequestIntoTemplateRequest `request:"mediaType=application/json"`
    
}

type PutServiceQuotaIncreaseRequestIntoTemplateResponse struct {
    AwsServiceAccessNotEnabledException *interface{} 
    AccessDeniedException *interface{} 
    ContentType string 
    DependencyAccessDeniedException *interface{} 
    IllegalArgumentException *interface{} 
    NoAvailableOrganizationException *interface{} 
    NoSuchResourceException *interface{} 
    PutServiceQuotaIncreaseRequestIntoTemplateResponse *shared.PutServiceQuotaIncreaseRequestIntoTemplateResponse 
    QuotaExceededException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TemplatesNotAvailableInRegionException *interface{} 
    TooManyRequestsException *interface{} 
    
}

