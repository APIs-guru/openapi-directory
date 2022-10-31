package operations

import (
"openapi/pkg/models/shared")


type UpdateProvisioningArtifactXAmzTargetEnum string

const (
    UpdateProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceUpdateProvisioningArtifact UpdateProvisioningArtifactXAmzTargetEnum = "AWS242ServiceCatalogService.UpdateProvisioningArtifact"
)


type UpdateProvisioningArtifactHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateProvisioningArtifactXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateProvisioningArtifactRequest struct {
    Headers UpdateProvisioningArtifactHeaders 
    Request shared.UpdateProvisioningArtifactInput `request:"mediaType=application/json"`
    
}

type UpdateProvisioningArtifactResponse struct {
    ContentType string 
    InvalidParametersException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdateProvisioningArtifactOutput *shared.UpdateProvisioningArtifactOutput 
    
}

