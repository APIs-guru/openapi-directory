package operations

import (
"openapi/pkg/models/shared")


type DisassociateOpsItemRelatedItemXAmzTargetEnum string

const (
    DisassociateOpsItemRelatedItemXAmzTargetEnumAmazonSsmDisassociateOpsItemRelatedItem DisassociateOpsItemRelatedItemXAmzTargetEnum = "AmazonSSM.DisassociateOpsItemRelatedItem"
)


type DisassociateOpsItemRelatedItemHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisassociateOpsItemRelatedItemXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisassociateOpsItemRelatedItemRequest struct {
    Headers DisassociateOpsItemRelatedItemHeaders 
    Request shared.DisassociateOpsItemRelatedItemRequest `request:"mediaType=application/json"`
    
}

type DisassociateOpsItemRelatedItemResponse struct {
    ContentType string 
    DisassociateOpsItemRelatedItemResponse map[string]interface{} 
    InternalServerError *interface{} 
    OpsItemInvalidParameterException *interface{} 
    OpsItemNotFoundException *interface{} 
    OpsItemRelatedItemAssociationNotFoundException *interface{} 
    StatusCode int64 
    
}

