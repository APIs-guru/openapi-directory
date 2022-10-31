package operations

import (
"openapi/pkg/models/shared")


type UpdateOpsItemXAmzTargetEnum string

const (
    UpdateOpsItemXAmzTargetEnumAmazonSsmUpdateOpsItem UpdateOpsItemXAmzTargetEnum = "AmazonSSM.UpdateOpsItem"
)


type UpdateOpsItemHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateOpsItemXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateOpsItemRequest struct {
    Headers UpdateOpsItemHeaders 
    Request shared.UpdateOpsItemRequest `request:"mediaType=application/json"`
    
}

type UpdateOpsItemResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    OpsItemAlreadyExistsException *interface{} 
    OpsItemInvalidParameterException *interface{} 
    OpsItemLimitExceededException *interface{} 
    OpsItemNotFoundException *interface{} 
    StatusCode int64 
    UpdateOpsItemResponse map[string]interface{} 
    
}

