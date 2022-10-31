package operations

import (
"openapi/pkg/models/shared")


type DescribeStudioLifecycleConfigXAmzTargetEnum string

const (
    DescribeStudioLifecycleConfigXAmzTargetEnumSageMakerDescribeStudioLifecycleConfig DescribeStudioLifecycleConfigXAmzTargetEnum = "SageMaker.DescribeStudioLifecycleConfig"
)


type DescribeStudioLifecycleConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeStudioLifecycleConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeStudioLifecycleConfigRequest struct {
    Headers DescribeStudioLifecycleConfigHeaders 
    Request shared.DescribeStudioLifecycleConfigRequest `request:"mediaType=application/json"`
    
}

type DescribeStudioLifecycleConfigResponse struct {
    ContentType string 
    DescribeStudioLifecycleConfigResponse *shared.DescribeStudioLifecycleConfigResponse 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

