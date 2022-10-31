package operations

import (
"openapi/pkg/models/shared")


type BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum string

const (
    BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifact BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum = "AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact"
)


type BatchDisassociateServiceActionFromProvisioningArtifactHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type BatchDisassociateServiceActionFromProvisioningArtifactRequest struct {
    Headers BatchDisassociateServiceActionFromProvisioningArtifactHeaders 
    Request shared.BatchDisassociateServiceActionFromProvisioningArtifactInput `request:"mediaType=application/json"`
    
}

type BatchDisassociateServiceActionFromProvisioningArtifactResponse struct {
    BatchDisassociateServiceActionFromProvisioningArtifactOutput *shared.BatchDisassociateServiceActionFromProvisioningArtifactOutput 
    ContentType string 
    InvalidParametersException *interface{} 
    StatusCode int64 
    
}

