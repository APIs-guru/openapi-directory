package operations

import (
"openapi/pkg/models/shared")


type CreateReturnShippingLabelXAmzTargetEnum string

const (
    CreateReturnShippingLabelXAmzTargetEnumAwsieSnowballJobManagementServiceCreateReturnShippingLabel CreateReturnShippingLabelXAmzTargetEnum = "AWSIESnowballJobManagementService.CreateReturnShippingLabel"
)


type CreateReturnShippingLabelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateReturnShippingLabelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateReturnShippingLabelRequest struct {
    Headers CreateReturnShippingLabelHeaders 
    Request shared.CreateReturnShippingLabelRequest `request:"mediaType=application/json"`
    
}

type CreateReturnShippingLabelResponse struct {
    ConflictException *interface{} 
    ContentType string 
    CreateReturnShippingLabelResult *shared.CreateReturnShippingLabelResult 
    InvalidInputCombinationException *interface{} 
    InvalidJobStateException *interface{} 
    InvalidResourceException *interface{} 
    ReturnShippingLabelAlreadyExistsException *interface{} 
    StatusCode int64 
    
}

