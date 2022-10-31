package shared



type FunctionConfiguration struct {
    CodeSha256 *string `json:"CodeSha256,omitempty"`
    CodeSize *int64 `json:"CodeSize,omitempty"`
    DeadLetterConfig *DeadLetterConfig `json:"DeadLetterConfig,omitempty"`
    Description *string `json:"Description,omitempty"`
    Environment *EnvironmentResponse `json:"Environment,omitempty"`
    FileSystemConfigs []FileSystemConfig `json:"FileSystemConfigs,omitempty"`
    FunctionArn *string `json:"FunctionArn,omitempty"`
    FunctionName *string `json:"FunctionName,omitempty"`
    Handler *string `json:"Handler,omitempty"`
    ImageConfigResponse *ImageConfigResponse `json:"ImageConfigResponse,omitempty"`
    KmsKeyArn *string `json:"KMSKeyArn,omitempty"`
    LastModified *string `json:"LastModified,omitempty"`
    LastUpdateStatus *LastUpdateStatusEnum `json:"LastUpdateStatus,omitempty"`
    LastUpdateStatusReason *string `json:"LastUpdateStatusReason,omitempty"`
    LastUpdateStatusReasonCode *LastUpdateStatusReasonCodeEnum `json:"LastUpdateStatusReasonCode,omitempty"`
    Layers []Layer `json:"Layers,omitempty"`
    MasterArn *string `json:"MasterArn,omitempty"`
    MemorySize *int64 `json:"MemorySize,omitempty"`
    PackageType *PackageTypeEnum `json:"PackageType,omitempty"`
    RevisionID *string `json:"RevisionId,omitempty"`
    Role *string `json:"Role,omitempty"`
    Runtime *RuntimeEnum `json:"Runtime,omitempty"`
    SigningJobArn *string `json:"SigningJobArn,omitempty"`
    SigningProfileVersionArn *string `json:"SigningProfileVersionArn,omitempty"`
    State *StateEnum `json:"State,omitempty"`
    StateReason *string `json:"StateReason,omitempty"`
    StateReasonCode *StateReasonCodeEnum `json:"StateReasonCode,omitempty"`
    Timeout *int64 `json:"Timeout,omitempty"`
    TracingConfig *TracingConfigResponse `json:"TracingConfig,omitempty"`
    Version *string `json:"Version,omitempty"`
    VpcConfig *VpcConfigResponse `json:"VpcConfig,omitempty"`
    
}

