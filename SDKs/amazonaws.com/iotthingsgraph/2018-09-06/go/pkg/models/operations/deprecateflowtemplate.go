package operations

import (
"openapi/pkg/models/shared")


type DeprecateFlowTemplateXAmzTargetEnum string

const (
    DeprecateFlowTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceDeprecateFlowTemplate DeprecateFlowTemplateXAmzTargetEnum = "IotThingsGraphFrontEndService.DeprecateFlowTemplate"
)


type DeprecateFlowTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeprecateFlowTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeprecateFlowTemplateRequest struct {
    Headers DeprecateFlowTemplateHeaders 
    Request shared.DeprecateFlowTemplateRequest `request:"mediaType=application/json"`
    
}

type DeprecateFlowTemplateResponse struct {
    ContentType string 
    DeprecateFlowTemplateResponse map[string]interface{} 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

