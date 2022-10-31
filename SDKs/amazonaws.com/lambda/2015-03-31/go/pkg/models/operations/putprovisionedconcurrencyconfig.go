package operations

import (
"openapi/pkg/models/shared")

type PutProvisionedConcurrencyConfigPathParams struct {
    FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
    
}

type PutProvisionedConcurrencyConfigQueryParams struct {
    Qualifier string `queryParam:"style=form,explode=true,name=Qualifier"`
    
}

type PutProvisionedConcurrencyConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PutProvisionedConcurrencyConfigRequestBody struct {
    ProvisionedConcurrentExecutions int64 `json:"ProvisionedConcurrentExecutions"`
    
}

type PutProvisionedConcurrencyConfigRequest struct {
    PathParams PutProvisionedConcurrencyConfigPathParams 
    QueryParams PutProvisionedConcurrencyConfigQueryParams 
    Headers PutProvisionedConcurrencyConfigHeaders 
    Request PutProvisionedConcurrencyConfigRequestBody `request:"mediaType=application/json"`
    
}

type PutProvisionedConcurrencyConfigResponse struct {
    ContentType string 
    InvalidParameterValueException *interface{} 
    PutProvisionedConcurrencyConfigResponse *shared.PutProvisionedConcurrencyConfigResponse 
    ResourceConflictException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

