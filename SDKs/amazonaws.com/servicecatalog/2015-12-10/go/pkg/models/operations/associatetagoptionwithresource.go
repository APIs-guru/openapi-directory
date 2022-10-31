package operations

import (
"openapi/pkg/models/shared")


type AssociateTagOptionWithResourceXAmzTargetEnum string

const (
    AssociateTagOptionWithResourceXAmzTargetEnumAws242ServiceCatalogServiceAssociateTagOptionWithResource AssociateTagOptionWithResourceXAmzTargetEnum = "AWS242ServiceCatalogService.AssociateTagOptionWithResource"
)


type AssociateTagOptionWithResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AssociateTagOptionWithResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AssociateTagOptionWithResourceRequest struct {
    Headers AssociateTagOptionWithResourceHeaders 
    Request shared.AssociateTagOptionWithResourceInput `request:"mediaType=application/json"`
    
}

type AssociateTagOptionWithResourceResponse struct {
    AssociateTagOptionWithResourceOutput map[string]interface{} 
    ContentType string 
    DuplicateResourceException *interface{} 
    InvalidParametersException *interface{} 
    InvalidStateException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TagOptionNotMigratedException *interface{} 
    
}

