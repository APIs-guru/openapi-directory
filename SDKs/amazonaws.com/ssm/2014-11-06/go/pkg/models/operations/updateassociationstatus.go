package operations

import (
"openapi/pkg/models/shared")


type UpdateAssociationStatusXAmzTargetEnum string

const (
    UpdateAssociationStatusXAmzTargetEnumAmazonSsmUpdateAssociationStatus UpdateAssociationStatusXAmzTargetEnum = "AmazonSSM.UpdateAssociationStatus"
)


type UpdateAssociationStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateAssociationStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateAssociationStatusRequest struct {
    Headers UpdateAssociationStatusHeaders 
    Request shared.UpdateAssociationStatusRequest `request:"mediaType=application/json"`
    
}

type UpdateAssociationStatusResponse struct {
    AssociationDoesNotExist *interface{} 
    ContentType string 
    InternalServerError *interface{} 
    InvalidDocument *interface{} 
    InvalidInstanceID *interface{} 
    StatusCode int64 
    StatusUnchanged *interface{} 
    TooManyUpdates *interface{} 
    UpdateAssociationStatusResult *shared.UpdateAssociationStatusResult 
    
}

