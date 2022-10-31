package operations

import (
"openapi/pkg/models/shared")


type DescribeSecretXAmzTargetEnum string

const (
    DescribeSecretXAmzTargetEnumSecretsmanagerDescribeSecret DescribeSecretXAmzTargetEnum = "secretsmanager.DescribeSecret"
)


type DescribeSecretHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeSecretXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeSecretRequest struct {
    Headers DescribeSecretHeaders 
    Request shared.DescribeSecretRequest `request:"mediaType=application/json"`
    
}

type DescribeSecretResponse struct {
    ContentType string 
    DescribeSecretResponse *shared.DescribeSecretResponse 
    InternalServiceError *interface{} 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

