package operations

import (
"openapi/pkg/models/shared")

type UpdateFunctionCodePathParams struct {
    FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
    
}

type UpdateFunctionCodeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateFunctionCodeRequestBody struct {
    DryRun *bool `json:"DryRun,omitempty"`
    ImageURI *string `json:"ImageUri,omitempty"`
    Publish *bool `json:"Publish,omitempty"`
    RevisionID *string `json:"RevisionId,omitempty"`
    S3Bucket *string `json:"S3Bucket,omitempty"`
    S3Key *string `json:"S3Key,omitempty"`
    S3ObjectVersion *string `json:"S3ObjectVersion,omitempty"`
    ZipFile *string `json:"ZipFile,omitempty"`
    
}

type UpdateFunctionCodeRequest struct {
    PathParams UpdateFunctionCodePathParams 
    Headers UpdateFunctionCodeHeaders 
    Request UpdateFunctionCodeRequestBody `request:"mediaType=application/json"`
    
}

type UpdateFunctionCodeResponse struct {
    CodeSigningConfigNotFoundException *interface{} 
    CodeStorageExceededException *interface{} 
    CodeVerificationFailedException *interface{} 
    ContentType string 
    FunctionConfiguration *shared.FunctionConfiguration 
    InvalidCodeSignatureException *interface{} 
    InvalidParameterValueException *interface{} 
    PreconditionFailedException *interface{} 
    ResourceConflictException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

