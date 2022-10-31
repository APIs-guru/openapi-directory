package operations

import (
"openapi/pkg/models/shared")


type CreateAssociationXAmzTargetEnum string

const (
    CreateAssociationXAmzTargetEnumAmazonSsmCreateAssociation CreateAssociationXAmzTargetEnum = "AmazonSSM.CreateAssociation"
)


type CreateAssociationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateAssociationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateAssociationRequest struct {
    Headers CreateAssociationHeaders 
    Request shared.CreateAssociationRequest `request:"mediaType=application/json"`
    
}

type CreateAssociationResponse struct {
    AssociationAlreadyExists *interface{} 
    AssociationLimitExceeded *interface{} 
    ContentType string 
    CreateAssociationResult *shared.CreateAssociationResult 
    InternalServerError *interface{} 
    InvalidDocument *interface{} 
    InvalidDocumentVersion *interface{} 
    InvalidInstanceID *interface{} 
    InvalidOutputLocation *interface{} 
    InvalidParameters *interface{} 
    InvalidSchedule *interface{} 
    InvalidTarget *interface{} 
    StatusCode int64 
    UnsupportedPlatformType *interface{} 
    
}

