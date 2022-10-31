package operations

import (
"openapi/pkg/models/shared")

type ListServiceQuotasQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListServiceQuotasXAmzTargetEnum string

const (
    ListServiceQuotasXAmzTargetEnumServiceQuotasV20190624ListServiceQuotas ListServiceQuotasXAmzTargetEnum = "ServiceQuotasV20190624.ListServiceQuotas"
)


type ListServiceQuotasHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListServiceQuotasXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListServiceQuotasRequest struct {
    QueryParams ListServiceQuotasQueryParams 
    Headers ListServiceQuotasHeaders 
    Request shared.ListServiceQuotasRequest `request:"mediaType=application/json"`
    
}

type ListServiceQuotasResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    IllegalArgumentException *interface{} 
    InvalidPaginationTokenException *interface{} 
    ListServiceQuotasResponse *shared.ListServiceQuotasResponse 
    NoSuchResourceException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

