package operations

import (
"openapi/pkg/models/shared")


type AnalyzeDocumentXAmzTargetEnum string

const (
    AnalyzeDocumentXAmzTargetEnumTextractAnalyzeDocument AnalyzeDocumentXAmzTargetEnum = "Textract.AnalyzeDocument"
)


type AnalyzeDocumentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AnalyzeDocumentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AnalyzeDocumentRequest struct {
    Headers AnalyzeDocumentHeaders 
    Request shared.AnalyzeDocumentRequest `request:"mediaType=application/json"`
    
}

type AnalyzeDocumentResponse struct {
    AccessDeniedException *interface{} 
    AnalyzeDocumentResponse *shared.AnalyzeDocumentResponse 
    BadDocumentException *interface{} 
    ContentType string 
    DocumentTooLargeException *interface{} 
    HumanLoopQuotaExceededException *interface{} 
    InternalServerError *interface{} 
    InvalidParameterException *interface{} 
    InvalidS3ObjectException *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnsupportedDocumentException *interface{} 
    
}

