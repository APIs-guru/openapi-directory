package operations

import (
"openapi/pkg/models/shared")

type CreateRobotApplicationVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateRobotApplicationVersionRequestBody struct {
    Application string `json:"application"`
    CurrentRevisionID *string `json:"currentRevisionId,omitempty"`
    ImageDigest *string `json:"imageDigest,omitempty"`
    S3Etags []string `json:"s3Etags,omitempty"`
    
}

type CreateRobotApplicationVersionRequest struct {
    Headers CreateRobotApplicationVersionHeaders 
    Request CreateRobotApplicationVersionRequestBody `request:"mediaType=application/json"`
    
}

type CreateRobotApplicationVersionResponse struct {
    ContentType string 
    CreateRobotApplicationVersionResponse *shared.CreateRobotApplicationVersionResponse 
    IdempotentParameterMismatchException *interface{} 
    InternalServerException *interface{} 
    InvalidParameterException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

