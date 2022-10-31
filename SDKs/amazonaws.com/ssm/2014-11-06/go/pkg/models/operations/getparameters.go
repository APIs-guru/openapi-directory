package operations

import (
"openapi/pkg/models/shared")


type GetParametersXAmzTargetEnum string

const (
    GetParametersXAmzTargetEnumAmazonSsmGetParameters GetParametersXAmzTargetEnum = "AmazonSSM.GetParameters"
)


type GetParametersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetParametersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetParametersRequest struct {
    Headers GetParametersHeaders 
    Request shared.GetParametersRequest `request:"mediaType=application/json"`
    
}

type GetParametersResponse struct {
    ContentType string 
    GetParametersResult *shared.GetParametersResult 
    InternalServerError *interface{} 
    InvalidKeyID *interface{} 
    StatusCode int64 
    
}

