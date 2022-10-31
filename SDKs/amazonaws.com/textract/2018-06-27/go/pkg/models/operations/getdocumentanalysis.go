package operations

import (
"openapi/pkg/models/shared")


type GetDocumentAnalysisXAmzTargetEnum string

const (
    GetDocumentAnalysisXAmzTargetEnumTextractGetDocumentAnalysis GetDocumentAnalysisXAmzTargetEnum = "Textract.GetDocumentAnalysis"
)


type GetDocumentAnalysisHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetDocumentAnalysisXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetDocumentAnalysisRequest struct {
    Headers GetDocumentAnalysisHeaders 
    Request shared.GetDocumentAnalysisRequest `request:"mediaType=application/json"`
    
}

type GetDocumentAnalysisResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetDocumentAnalysisResponse *shared.GetDocumentAnalysisResponse 
    InternalServerError *interface{} 
    InvalidJobIDException *interface{} 
    InvalidKmsKeyException *interface{} 
    InvalidParameterException *interface{} 
    InvalidS3ObjectException *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

