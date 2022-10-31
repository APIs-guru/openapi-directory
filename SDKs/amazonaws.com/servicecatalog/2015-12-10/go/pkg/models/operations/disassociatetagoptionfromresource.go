package operations

import (
"openapi/pkg/models/shared")


type DisassociateTagOptionFromResourceXAmzTargetEnum string

const (
    DisassociateTagOptionFromResourceXAmzTargetEnumAws242ServiceCatalogServiceDisassociateTagOptionFromResource DisassociateTagOptionFromResourceXAmzTargetEnum = "AWS242ServiceCatalogService.DisassociateTagOptionFromResource"
)


type DisassociateTagOptionFromResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisassociateTagOptionFromResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisassociateTagOptionFromResourceRequest struct {
    Headers DisassociateTagOptionFromResourceHeaders 
    Request shared.DisassociateTagOptionFromResourceInput `request:"mediaType=application/json"`
    
}

type DisassociateTagOptionFromResourceResponse struct {
    ContentType string 
    DisassociateTagOptionFromResourceOutput map[string]interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TagOptionNotMigratedException *interface{} 
    
}

