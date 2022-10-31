package operations

import (
"openapi/pkg/models/shared")


type DeleteTagOptionXAmzTargetEnum string

const (
    DeleteTagOptionXAmzTargetEnumAws242ServiceCatalogServiceDeleteTagOption DeleteTagOptionXAmzTargetEnum = "AWS242ServiceCatalogService.DeleteTagOption"
)


type DeleteTagOptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteTagOptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteTagOptionRequest struct {
    Headers DeleteTagOptionHeaders 
    Request shared.DeleteTagOptionInput `request:"mediaType=application/json"`
    
}

type DeleteTagOptionResponse struct {
    ContentType string 
    DeleteTagOptionOutput map[string]interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TagOptionNotMigratedException *interface{} 
    
}

