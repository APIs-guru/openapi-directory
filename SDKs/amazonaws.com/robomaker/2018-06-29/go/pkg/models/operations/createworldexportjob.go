package operations

import (
"openapi/pkg/models/shared")

type CreateWorldExportJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateWorldExportJobRequestBodyOutputLocation struct {
    S3Bucket *string `json:"s3Bucket,omitempty"`
    S3Prefix *string `json:"s3Prefix,omitempty"`
    
}

type CreateWorldExportJobRequestBody struct {
    ClientRequestToken *string `json:"clientRequestToken,omitempty"`
    IamRole string `json:"iamRole"`
    OutputLocation CreateWorldExportJobRequestBodyOutputLocation `json:"outputLocation"`
    Tags map[string]string `json:"tags,omitempty"`
    Worlds []string `json:"worlds"`
    
}

type CreateWorldExportJobRequest struct {
    Headers CreateWorldExportJobHeaders 
    Request CreateWorldExportJobRequestBody `request:"mediaType=application/json"`
    
}

type CreateWorldExportJobResponse struct {
    ContentType string 
    CreateWorldExportJobResponse *shared.CreateWorldExportJobResponse 
    IdempotentParameterMismatchException *interface{} 
    InternalServerException *interface{} 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

