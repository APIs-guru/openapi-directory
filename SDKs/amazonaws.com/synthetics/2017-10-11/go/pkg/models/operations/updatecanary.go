package operations

import (
"openapi/pkg/models/shared")

type UpdateCanaryPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type UpdateCanaryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateCanaryRequestBodyCode struct {
    Handler *string `json:"Handler,omitempty"`
    S3Bucket *string `json:"S3Bucket,omitempty"`
    S3Key *string `json:"S3Key,omitempty"`
    S3Version *string `json:"S3Version,omitempty"`
    ZipFile *string `json:"ZipFile,omitempty"`
    
}

type UpdateCanaryRequestBodyRunConfig struct {
    ActiveTracing *bool `json:"ActiveTracing,omitempty"`
    EnvironmentVariables map[string]string `json:"EnvironmentVariables,omitempty"`
    MemoryInMb *int64 `json:"MemoryInMB,omitempty"`
    TimeoutInSeconds *int64 `json:"TimeoutInSeconds,omitempty"`
    
}

type UpdateCanaryRequestBodySchedule struct {
    DurationInSeconds *int64 `json:"DurationInSeconds,omitempty"`
    Expression *string `json:"Expression,omitempty"`
    
}

type UpdateCanaryRequestBodyVisualReference struct {
    BaseCanaryRunID *string `json:"BaseCanaryRunId,omitempty"`
    BaseScreenshots []shared.BaseScreenshot `json:"BaseScreenshots,omitempty"`
    
}

type UpdateCanaryRequestBodyVpcConfig struct {
    SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
    SubnetIds []string `json:"SubnetIds,omitempty"`
    
}

type UpdateCanaryRequestBody struct {
    Code *UpdateCanaryRequestBodyCode `json:"Code,omitempty"`
    ExecutionRoleArn *string `json:"ExecutionRoleArn,omitempty"`
    FailureRetentionPeriodInDays *int64 `json:"FailureRetentionPeriodInDays,omitempty"`
    RunConfig *UpdateCanaryRequestBodyRunConfig `json:"RunConfig,omitempty"`
    RuntimeVersion *string `json:"RuntimeVersion,omitempty"`
    Schedule *UpdateCanaryRequestBodySchedule `json:"Schedule,omitempty"`
    SuccessRetentionPeriodInDays *int64 `json:"SuccessRetentionPeriodInDays,omitempty"`
    VisualReference *UpdateCanaryRequestBodyVisualReference `json:"VisualReference,omitempty"`
    VpcConfig *UpdateCanaryRequestBodyVpcConfig `json:"VpcConfig,omitempty"`
    
}

type UpdateCanaryRequest struct {
    PathParams UpdateCanaryPathParams 
    Headers UpdateCanaryHeaders 
    Request UpdateCanaryRequestBody `request:"mediaType=application/json"`
    
}

type UpdateCanaryResponse struct {
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdateCanaryResponse map[string]interface{} 
    ValidationException *interface{} 
    
}

