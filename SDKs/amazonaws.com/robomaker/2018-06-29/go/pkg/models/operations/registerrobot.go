package operations

import (
"openapi/pkg/models/shared")

type RegisterRobotHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type RegisterRobotRequestBody struct {
    Fleet string `json:"fleet"`
    Robot string `json:"robot"`
    
}

type RegisterRobotRequest struct {
    Headers RegisterRobotHeaders 
    Request RegisterRobotRequestBody `request:"mediaType=application/json"`
    
}

type RegisterRobotResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidParameterException *interface{} 
    LimitExceededException *interface{} 
    RegisterRobotResponse *shared.RegisterRobotResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

