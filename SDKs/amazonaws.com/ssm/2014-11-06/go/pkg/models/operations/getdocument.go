package operations

import (
"openapi/pkg/models/shared")


type GetDocumentXAmzTargetEnum string

const (
    GetDocumentXAmzTargetEnumAmazonSsmGetDocument GetDocumentXAmzTargetEnum = "AmazonSSM.GetDocument"
)


type GetDocumentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetDocumentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetDocumentRequest struct {
    Headers GetDocumentHeaders 
    Request shared.GetDocumentRequest `request:"mediaType=application/json"`
    
}

type GetDocumentResponse struct {
    ContentType string 
    GetDocumentResult *shared.GetDocumentResult 
    InternalServerError *interface{} 
    InvalidDocument *interface{} 
    InvalidDocumentVersion *interface{} 
    StatusCode int64 
    
}

