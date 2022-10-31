package operations

import (
"openapi/pkg/models/shared")


type CopyProductXAmzTargetEnum string

const (
    CopyProductXAmzTargetEnumAws242ServiceCatalogServiceCopyProduct CopyProductXAmzTargetEnum = "AWS242ServiceCatalogService.CopyProduct"
)


type CopyProductHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CopyProductXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CopyProductRequest struct {
    Headers CopyProductHeaders 
    Request shared.CopyProductInput `request:"mediaType=application/json"`
    
}

type CopyProductResponse struct {
    ContentType string 
    CopyProductOutput *shared.CopyProductOutput 
    InvalidParametersException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

