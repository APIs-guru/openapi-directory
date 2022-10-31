package operations

import (
"openapi/pkg/models/shared")


type DescribeDocumentXAmzTargetEnum string

const (
    DescribeDocumentXAmzTargetEnumAmazonSsmDescribeDocument DescribeDocumentXAmzTargetEnum = "AmazonSSM.DescribeDocument"
)


type DescribeDocumentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeDocumentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeDocumentRequest struct {
    Headers DescribeDocumentHeaders 
    Request shared.DescribeDocumentRequest `request:"mediaType=application/json"`
    
}

type DescribeDocumentResponse struct {
    ContentType string 
    DescribeDocumentResult *shared.DescribeDocumentResult 
    InternalServerError *interface{} 
    InvalidDocument *interface{} 
    InvalidDocumentVersion *interface{} 
    StatusCode int64 
    
}

