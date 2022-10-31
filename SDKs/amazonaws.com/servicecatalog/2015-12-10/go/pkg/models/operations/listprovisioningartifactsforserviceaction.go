package operations

import (
"openapi/pkg/models/shared")

type ListProvisioningArtifactsForServiceActionQueryParams struct {
    PageSize *string `queryParam:"style=form,explode=true,name=PageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
    
}


type ListProvisioningArtifactsForServiceActionXAmzTargetEnum string

const (
    ListProvisioningArtifactsForServiceActionXAmzTargetEnumAws242ServiceCatalogServiceListProvisioningArtifactsForServiceAction ListProvisioningArtifactsForServiceActionXAmzTargetEnum = "AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction"
)


type ListProvisioningArtifactsForServiceActionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListProvisioningArtifactsForServiceActionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListProvisioningArtifactsForServiceActionRequest struct {
    QueryParams ListProvisioningArtifactsForServiceActionQueryParams 
    Headers ListProvisioningArtifactsForServiceActionHeaders 
    Request shared.ListProvisioningArtifactsForServiceActionInput `request:"mediaType=application/json"`
    
}

type ListProvisioningArtifactsForServiceActionResponse struct {
    ContentType string 
    InvalidParametersException *interface{} 
    ListProvisioningArtifactsForServiceActionOutput *shared.ListProvisioningArtifactsForServiceActionOutput 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

