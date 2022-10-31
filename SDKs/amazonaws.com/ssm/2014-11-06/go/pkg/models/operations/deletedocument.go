package operations

import (
"openapi/pkg/models/shared")


type DeleteDocumentXAmzTargetEnum string

const (
    DeleteDocumentXAmzTargetEnumAmazonSsmDeleteDocument DeleteDocumentXAmzTargetEnum = "AmazonSSM.DeleteDocument"
)


type DeleteDocumentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteDocumentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteDocumentRequest struct {
    Headers DeleteDocumentHeaders 
    Request shared.DeleteDocumentRequest `request:"mediaType=application/json"`
    
}

type DeleteDocumentResponse struct {
    AssociatedInstances *interface{} 
    ContentType string 
    DeleteDocumentResult map[string]interface{} 
    InternalServerError *interface{} 
    InvalidDocument *interface{} 
    InvalidDocumentOperation *interface{} 
    StatusCode int64 
    
}

