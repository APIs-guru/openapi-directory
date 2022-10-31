package operations

import (
"openapi/pkg/models/shared")


type DisassociateWebAclxAmzTargetEnum string

const (
    DisassociateWebAclxAmzTargetEnumAwswafRegional20161128DisassociateWebACL DisassociateWebAclxAmzTargetEnum = "AWSWAF_Regional_20161128.DisassociateWebACL"
)


type DisassociateWebACLHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisassociateWebAclxAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisassociateWebACLRequest struct {
    Headers DisassociateWebACLHeaders 
    Request shared.DisassociateWebACLRequest `request:"mediaType=application/json"`
    
}

type DisassociateWebACLResponse struct {
    ContentType string 
    DisassociateWebACLResponse map[string]interface{} 
    StatusCode int64 
    WafInternalErrorException *interface{} 
    WafInvalidAccountException *interface{} 
    WafInvalidParameterException *interface{} 
    WafNonexistentItemException *interface{} 
    
}

