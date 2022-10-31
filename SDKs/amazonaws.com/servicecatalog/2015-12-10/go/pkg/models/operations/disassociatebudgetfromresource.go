package operations

import (
"openapi/pkg/models/shared")


type DisassociateBudgetFromResourceXAmzTargetEnum string

const (
    DisassociateBudgetFromResourceXAmzTargetEnumAws242ServiceCatalogServiceDisassociateBudgetFromResource DisassociateBudgetFromResourceXAmzTargetEnum = "AWS242ServiceCatalogService.DisassociateBudgetFromResource"
)


type DisassociateBudgetFromResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisassociateBudgetFromResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisassociateBudgetFromResourceRequest struct {
    Headers DisassociateBudgetFromResourceHeaders 
    Request shared.DisassociateBudgetFromResourceInput `request:"mediaType=application/json"`
    
}

type DisassociateBudgetFromResourceResponse struct {
    ContentType string 
    DisassociateBudgetFromResourceOutput map[string]interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

