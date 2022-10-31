package operations

import (
"openapi/pkg/models/shared")


type DescribeTrialComponentXAmzTargetEnum string

const (
    DescribeTrialComponentXAmzTargetEnumSageMakerDescribeTrialComponent DescribeTrialComponentXAmzTargetEnum = "SageMaker.DescribeTrialComponent"
)


type DescribeTrialComponentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeTrialComponentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeTrialComponentRequest struct {
    Headers DescribeTrialComponentHeaders 
    Request shared.DescribeTrialComponentRequest `request:"mediaType=application/json"`
    
}

type DescribeTrialComponentResponse struct {
    ContentType string 
    DescribeTrialComponentResponse *shared.DescribeTrialComponentResponse 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

