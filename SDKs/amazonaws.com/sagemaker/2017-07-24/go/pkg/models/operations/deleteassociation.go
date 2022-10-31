package operations

import (
"openapi/pkg/models/shared")


type DeleteAssociationXAmzTargetEnum string

const (
    DeleteAssociationXAmzTargetEnumSageMakerDeleteAssociation DeleteAssociationXAmzTargetEnum = "SageMaker.DeleteAssociation"
)


type DeleteAssociationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteAssociationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteAssociationRequest struct {
    Headers DeleteAssociationHeaders 
    Request shared.DeleteAssociationRequest `request:"mediaType=application/json"`
    
}

type DeleteAssociationResponse struct {
    ContentType string 
    DeleteAssociationResponse *shared.DeleteAssociationResponse 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

