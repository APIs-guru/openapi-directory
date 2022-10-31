package operations

import (
"openapi/pkg/models/shared")


type CreateOpsItemXAmzTargetEnum string

const (
    CreateOpsItemXAmzTargetEnumAmazonSsmCreateOpsItem CreateOpsItemXAmzTargetEnum = "AmazonSSM.CreateOpsItem"
)


type CreateOpsItemHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateOpsItemXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateOpsItemRequest struct {
    Headers CreateOpsItemHeaders 
    Request shared.CreateOpsItemRequest `request:"mediaType=application/json"`
    
}

type CreateOpsItemResponse struct {
    ContentType string 
    CreateOpsItemResponse *shared.CreateOpsItemResponse 
    InternalServerError *interface{} 
    OpsItemAlreadyExistsException *interface{} 
    OpsItemInvalidParameterException *interface{} 
    OpsItemLimitExceededException *interface{} 
    StatusCode int64 
    
}

