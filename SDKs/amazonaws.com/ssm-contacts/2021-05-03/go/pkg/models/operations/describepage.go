package operations

import (
"openapi/pkg/models/shared")


type DescribePageXAmzTargetEnum string

const (
    DescribePageXAmzTargetEnumSsmContactsDescribePage DescribePageXAmzTargetEnum = "SSMContacts.DescribePage"
)


type DescribePageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribePageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribePageRequest struct {
    Headers DescribePageHeaders 
    Request shared.DescribePageRequest `request:"mediaType=application/json"`
    
}

type DescribePageResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DataEncryptionException *interface{} 
    DescribePageResult *shared.DescribePageResult 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

