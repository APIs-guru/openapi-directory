package shared

type InfrastructureProperties struct {
	IsDracoonCloud           *bool   `json:"isDracoonCloud"`
	MediaServerConfigEnabled *bool   `json:"mediaServerConfigEnabled"`
	S3DefaultRegion          *string `json:"s3DefaultRegion"`
	S3EnforceDirectUpload    *bool   `json:"s3EnforceDirectUpload"`
	SmsConfigEnabled         *bool   `json:"smsConfigEnabled"`
	TenantUUID               *string `json:"tenantUuid"`
}
