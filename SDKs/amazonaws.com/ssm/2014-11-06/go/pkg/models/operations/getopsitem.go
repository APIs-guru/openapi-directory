package operations

import (
"openapi/pkg/models/shared")


type GetOpsItemXAmzTargetEnum string

const (
    GetOpsItemXAmzTargetEnumAmazonSsmGetOpsItem GetOpsItemXAmzTargetEnum = "AmazonSSM.GetOpsItem"
)


type GetOpsItemHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetOpsItemXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetOpsItemRequest struct {
    Headers GetOpsItemHeaders 
    Request shared.GetOpsItemRequest `request:"mediaType=application/json"`
    
}

type GetOpsItemResponse struct {
    ContentType string 
    GetOpsItemResponse *shared.GetOpsItemResponse 
    InternalServerError *interface{} 
    OpsItemNotFoundException *interface{} 
    StatusCode int64 
    
}

