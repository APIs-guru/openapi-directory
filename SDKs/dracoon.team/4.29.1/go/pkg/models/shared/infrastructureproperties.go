package shared

type InfrastructureProperties struct {
	IsDracoonCloud           *bool   `json:"isDracoonCloud,omitempty"`
	MediaServerConfigEnabled *bool   `json:"mediaServerConfigEnabled,omitempty"`
	S3DefaultRegion          *string `json:"s3DefaultRegion,omitempty"`
	S3EnforceDirectUpload    *bool   `json:"s3EnforceDirectUpload,omitempty"`
	SmsConfigEnabled         *bool   `json:"smsConfigEnabled,omitempty"`
	TenantUUID               *string `json:"tenantUuid,omitempty"`
}
