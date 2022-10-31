package operations

import (
"openapi/pkg/models/shared")


type BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum string

const (
    BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifact BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum = "AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact"
)


type BatchAssociateServiceActionWithProvisioningArtifactHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type BatchAssociateServiceActionWithProvisioningArtifactRequest struct {
    Headers BatchAssociateServiceActionWithProvisioningArtifactHeaders 
    Request shared.BatchAssociateServiceActionWithProvisioningArtifactInput `request:"mediaType=application/json"`
    
}

type BatchAssociateServiceActionWithProvisioningArtifactResponse struct {
    BatchAssociateServiceActionWithProvisioningArtifactOutput *shared.BatchAssociateServiceActionWithProvisioningArtifactOutput 
    ContentType string 
    InvalidParametersException *interface{} 
    StatusCode int64 
    
}

