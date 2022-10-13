package shared

type AddApplicationVpcConfigurationResponse struct {
	ApplicationArn              *string                      `json:"ApplicationARN"`
	ApplicationVersionID        *int64                       `json:"ApplicationVersionId"`
	VpcConfigurationDescription *VpcConfigurationDescription `json:"VpcConfigurationDescription"`
}
