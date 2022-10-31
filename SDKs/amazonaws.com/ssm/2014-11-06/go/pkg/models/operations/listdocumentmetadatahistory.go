package operations

import (
"openapi/pkg/models/shared")


type ListDocumentMetadataHistoryXAmzTargetEnum string

const (
    ListDocumentMetadataHistoryXAmzTargetEnumAmazonSsmListDocumentMetadataHistory ListDocumentMetadataHistoryXAmzTargetEnum = "AmazonSSM.ListDocumentMetadataHistory"
)


type ListDocumentMetadataHistoryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListDocumentMetadataHistoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListDocumentMetadataHistoryRequest struct {
    Headers ListDocumentMetadataHistoryHeaders 
    Request shared.ListDocumentMetadataHistoryRequest `request:"mediaType=application/json"`
    
}

type ListDocumentMetadataHistoryResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    InvalidDocument *interface{} 
    InvalidDocumentVersion *interface{} 
    InvalidNextToken *interface{} 
    ListDocumentMetadataHistoryResponse *shared.ListDocumentMetadataHistoryResponse 
    StatusCode int64 
    
}

