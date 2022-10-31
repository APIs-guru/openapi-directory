package operations

import (
"openapi/pkg/models/shared")

type ListResourcesForTagOptionQueryParams struct {
    PageSize *string `queryParam:"style=form,explode=true,name=PageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
    
}


type ListResourcesForTagOptionXAmzTargetEnum string

const (
    ListResourcesForTagOptionXAmzTargetEnumAws242ServiceCatalogServiceListResourcesForTagOption ListResourcesForTagOptionXAmzTargetEnum = "AWS242ServiceCatalogService.ListResourcesForTagOption"
)


type ListResourcesForTagOptionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListResourcesForTagOptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListResourcesForTagOptionRequest struct {
    QueryParams ListResourcesForTagOptionQueryParams 
    Headers ListResourcesForTagOptionHeaders 
    Request shared.ListResourcesForTagOptionInput `request:"mediaType=application/json"`
    
}

type ListResourcesForTagOptionResponse struct {
    ContentType string 
    InvalidParametersException *interface{} 
    ListResourcesForTagOptionOutput *shared.ListResourcesForTagOptionOutput 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TagOptionNotMigratedException *interface{} 
    
}

