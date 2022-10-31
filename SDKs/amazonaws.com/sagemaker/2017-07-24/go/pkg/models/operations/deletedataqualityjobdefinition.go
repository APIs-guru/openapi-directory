package operations

import (
"openapi/pkg/models/shared")


type DeleteDataQualityJobDefinitionXAmzTargetEnum string

const (
    DeleteDataQualityJobDefinitionXAmzTargetEnumSageMakerDeleteDataQualityJobDefinition DeleteDataQualityJobDefinitionXAmzTargetEnum = "SageMaker.DeleteDataQualityJobDefinition"
)


type DeleteDataQualityJobDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteDataQualityJobDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteDataQualityJobDefinitionRequest struct {
    Headers DeleteDataQualityJobDefinitionHeaders 
    Request shared.DeleteDataQualityJobDefinitionRequest `request:"mediaType=application/json"`
    
}

type DeleteDataQualityJobDefinitionResponse struct {
    ContentType string 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

