package operations

import (
"openapi/pkg/models/shared")


type StartDocumentTextDetectionXAmzTargetEnum string

const (
    StartDocumentTextDetectionXAmzTargetEnumTextractStartDocumentTextDetection StartDocumentTextDetectionXAmzTargetEnum = "Textract.StartDocumentTextDetection"
)


type StartDocumentTextDetectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartDocumentTextDetectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartDocumentTextDetectionRequest struct {
    Headers StartDocumentTextDetectionHeaders 
    Request shared.StartDocumentTextDetectionRequest `request:"mediaType=application/json"`
    
}

type StartDocumentTextDetectionResponse struct {
    AccessDeniedException *interface{} 
    BadDocumentException *interface{} 
    ContentType string 
    DocumentTooLargeException *interface{} 
    IdempotentParameterMismatchException *interface{} 
    InternalServerError *interface{} 
    InvalidKmsKeyException *interface{} 
    InvalidParameterException *interface{} 
    InvalidS3ObjectException *interface{} 
    LimitExceededException *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    StartDocumentTextDetectionResponse *shared.StartDocumentTextDetectionResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnsupportedDocumentException *interface{} 
    
}

