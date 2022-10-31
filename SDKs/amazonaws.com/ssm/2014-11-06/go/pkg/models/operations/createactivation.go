package operations

import (
"openapi/pkg/models/shared")


type CreateActivationXAmzTargetEnum string

const (
    CreateActivationXAmzTargetEnumAmazonSsmCreateActivation CreateActivationXAmzTargetEnum = "AmazonSSM.CreateActivation"
)


type CreateActivationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateActivationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateActivationRequest struct {
    Headers CreateActivationHeaders 
    Request shared.CreateActivationRequest `request:"mediaType=application/json"`
    
}

type CreateActivationResponse struct {
    ContentType string 
    CreateActivationResult *shared.CreateActivationResult 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

