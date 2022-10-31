package operations

import (
"openapi/pkg/models/shared")


type DescribePermissionSetXAmzTargetEnum string

const (
    DescribePermissionSetXAmzTargetEnumSwbExternalServiceDescribePermissionSet DescribePermissionSetXAmzTargetEnum = "SWBExternalService.DescribePermissionSet"
)


type DescribePermissionSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribePermissionSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribePermissionSetRequest struct {
    Headers DescribePermissionSetHeaders 
    Request shared.DescribePermissionSetRequest `request:"mediaType=application/json"`
    
}

type DescribePermissionSetResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribePermissionSetResponse *shared.DescribePermissionSetResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

