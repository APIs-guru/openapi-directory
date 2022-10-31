package operations

import (
"openapi/pkg/models/shared")


type DisassociateResourceResourceTypeEnum string

const (
    DisassociateResourceResourceTypeEnumCfnStack DisassociateResourceResourceTypeEnum = "CFN_STACK"
)


type DisassociateResourcePathParams struct {
    Application string `pathParam:"style=simple,explode=false,name=application"`
    Resource string `pathParam:"style=simple,explode=false,name=resource"`
    ResourceType DisassociateResourceResourceTypeEnum `pathParam:"style=simple,explode=false,name=resourceType"`
    
}

type DisassociateResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DisassociateResourceRequest struct {
    PathParams DisassociateResourcePathParams 
    Headers DisassociateResourceHeaders 
    
}

type DisassociateResourceResponse struct {
    ContentType string 
    DisassociateResourceResponse *shared.DisassociateResourceResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

