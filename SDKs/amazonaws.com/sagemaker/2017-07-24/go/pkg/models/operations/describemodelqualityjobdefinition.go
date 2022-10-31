package operations

import (
"openapi/pkg/models/shared")


type DescribeModelQualityJobDefinitionXAmzTargetEnum string

const (
    DescribeModelQualityJobDefinitionXAmzTargetEnumSageMakerDescribeModelQualityJobDefinition DescribeModelQualityJobDefinitionXAmzTargetEnum = "SageMaker.DescribeModelQualityJobDefinition"
)


type DescribeModelQualityJobDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeModelQualityJobDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeModelQualityJobDefinitionRequest struct {
    Headers DescribeModelQualityJobDefinitionHeaders 
    Request shared.DescribeModelQualityJobDefinitionRequest `request:"mediaType=application/json"`
    
}

type DescribeModelQualityJobDefinitionResponse struct {
    ContentType string 
    DescribeModelQualityJobDefinitionResponse *shared.DescribeModelQualityJobDefinitionResponse 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

