package operations

import (
"openapi/pkg/models/shared")


type GetDocumentTextDetectionXAmzTargetEnum string

const (
    GetDocumentTextDetectionXAmzTargetEnumTextractGetDocumentTextDetection GetDocumentTextDetectionXAmzTargetEnum = "Textract.GetDocumentTextDetection"
)


type GetDocumentTextDetectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetDocumentTextDetectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetDocumentTextDetectionRequest struct {
    Headers GetDocumentTextDetectionHeaders 
    Request shared.GetDocumentTextDetectionRequest `request:"mediaType=application/json"`
    
}

type GetDocumentTextDetectionResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetDocumentTextDetectionResponse *shared.GetDocumentTextDetectionResponse 
    InternalServerError *interface{} 
    InvalidJobIDException *interface{} 
    InvalidKmsKeyException *interface{} 
    InvalidParameterException *interface{} 
    InvalidS3ObjectException *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

