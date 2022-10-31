package operations

import (
"openapi/pkg/models/shared")


type CreateProvisioningArtifactXAmzTargetEnum string

const (
    CreateProvisioningArtifactXAmzTargetEnumAws242ServiceCatalogServiceCreateProvisioningArtifact CreateProvisioningArtifactXAmzTargetEnum = "AWS242ServiceCatalogService.CreateProvisioningArtifact"
)


type CreateProvisioningArtifactHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateProvisioningArtifactXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateProvisioningArtifactRequest struct {
    Headers CreateProvisioningArtifactHeaders 
    Request shared.CreateProvisioningArtifactInput `request:"mediaType=application/json"`
    
}

type CreateProvisioningArtifactResponse struct {
    ContentType string 
    CreateProvisioningArtifactOutput *shared.CreateProvisioningArtifactOutput 
    InvalidParametersException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

