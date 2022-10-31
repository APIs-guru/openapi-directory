package operations

import (
"openapi/pkg/models/shared")


type StartAssociationsOnceXAmzTargetEnum string

const (
    StartAssociationsOnceXAmzTargetEnumAmazonSsmStartAssociationsOnce StartAssociationsOnceXAmzTargetEnum = "AmazonSSM.StartAssociationsOnce"
)


type StartAssociationsOnceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartAssociationsOnceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartAssociationsOnceRequest struct {
    Headers StartAssociationsOnceHeaders 
    Request shared.StartAssociationsOnceRequest `request:"mediaType=application/json"`
    
}

type StartAssociationsOnceResponse struct {
    AssociationDoesNotExist *interface{} 
    ContentType string 
    InvalidAssociation *interface{} 
    StartAssociationsOnceResult map[string]interface{} 
    StatusCode int64 
    
}

