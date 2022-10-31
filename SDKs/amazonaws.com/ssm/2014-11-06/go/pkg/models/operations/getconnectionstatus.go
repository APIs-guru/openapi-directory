package operations

import (
"openapi/pkg/models/shared")


type GetConnectionStatusXAmzTargetEnum string

const (
    GetConnectionStatusXAmzTargetEnumAmazonSsmGetConnectionStatus GetConnectionStatusXAmzTargetEnum = "AmazonSSM.GetConnectionStatus"
)


type GetConnectionStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetConnectionStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetConnectionStatusRequest struct {
    Headers GetConnectionStatusHeaders 
    Request shared.GetConnectionStatusRequest `request:"mediaType=application/json"`
    
}

type GetConnectionStatusResponse struct {
    ContentType string 
    GetConnectionStatusResponse *shared.GetConnectionStatusResponse 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

