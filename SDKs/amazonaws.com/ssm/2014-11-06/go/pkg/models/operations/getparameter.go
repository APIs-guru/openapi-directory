package operations

import (
"openapi/pkg/models/shared")


type GetParameterXAmzTargetEnum string

const (
    GetParameterXAmzTargetEnumAmazonSsmGetParameter GetParameterXAmzTargetEnum = "AmazonSSM.GetParameter"
)


type GetParameterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetParameterXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetParameterRequest struct {
    Headers GetParameterHeaders 
    Request shared.GetParameterRequest `request:"mediaType=application/json"`
    
}

type GetParameterResponse struct {
    ContentType string 
    GetParameterResult *shared.GetParameterResult 
    InternalServerError *interface{} 
    InvalidKeyID *interface{} 
    ParameterNotFound *interface{} 
    ParameterVersionNotFound *interface{} 
    StatusCode int64 
    
}

