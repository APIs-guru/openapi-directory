package operations

import (
"openapi/pkg/models/shared")


type CreateServiceActionXAmzTargetEnum string

const (
    CreateServiceActionXAmzTargetEnumAws242ServiceCatalogServiceCreateServiceAction CreateServiceActionXAmzTargetEnum = "AWS242ServiceCatalogService.CreateServiceAction"
)


type CreateServiceActionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateServiceActionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateServiceActionRequest struct {
    Headers CreateServiceActionHeaders 
    Request shared.CreateServiceActionInput `request:"mediaType=application/json"`
    
}

type CreateServiceActionResponse struct {
    ContentType string 
    CreateServiceActionOutput *shared.CreateServiceActionOutput 
    InvalidParametersException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    
}

