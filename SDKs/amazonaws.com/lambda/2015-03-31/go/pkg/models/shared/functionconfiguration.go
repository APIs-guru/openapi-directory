package shared

type FunctionConfiguration struct {
	CodeSha256                 *string                         `json:"CodeSha256"`
	CodeSize                   *int64                          `json:"CodeSize"`
	DeadLetterConfig           *DeadLetterConfig               `json:"DeadLetterConfig"`
	Description                *string                         `json:"Description"`
	Environment                *EnvironmentResponse            `json:"Environment"`
	FileSystemConfigs          []FileSystemConfig              `json:"FileSystemConfigs"`
	FunctionArn                *string                         `json:"FunctionArn"`
	FunctionName               *string                         `json:"FunctionName"`
	Handler                    *string                         `json:"Handler"`
	ImageConfigResponse        *ImageConfigResponse            `json:"ImageConfigResponse"`
	KmsKeyArn                  *string                         `json:"KMSKeyArn"`
	LastModified               *string                         `json:"LastModified"`
	LastUpdateStatus           *LastUpdateStatusEnum           `json:"LastUpdateStatus"`
	LastUpdateStatusReason     *string                         `json:"LastUpdateStatusReason"`
	LastUpdateStatusReasonCode *LastUpdateStatusReasonCodeEnum `json:"LastUpdateStatusReasonCode"`
	Layers                     []Layer                         `json:"Layers"`
	MasterArn                  *string                         `json:"MasterArn"`
	MemorySize                 *int64                          `json:"MemorySize"`
	PackageType                *PackageTypeEnum                `json:"PackageType"`
	RevisionID                 *string                         `json:"RevisionId"`
	Role                       *string                         `json:"Role"`
	Runtime                    *RuntimeEnum                    `json:"Runtime"`
	SigningJobArn              *string                         `json:"SigningJobArn"`
	SigningProfileVersionArn   *string                         `json:"SigningProfileVersionArn"`
	State                      *StateEnum                      `json:"State"`
	StateReason                *string                         `json:"StateReason"`
	StateReasonCode            *StateReasonCodeEnum            `json:"StateReasonCode"`
	Timeout                    *int64                          `json:"Timeout"`
	TracingConfig              *TracingConfigResponse          `json:"TracingConfig"`
	Version                    *string                         `json:"Version"`
	VpcConfig                  *VpcConfigResponse              `json:"VpcConfig"`
}
