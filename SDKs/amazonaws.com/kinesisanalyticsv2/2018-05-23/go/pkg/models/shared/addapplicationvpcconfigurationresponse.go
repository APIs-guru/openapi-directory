package shared

type AddApplicationVpcConfigurationResponse struct {
	ApplicationArn              *string                      `json:"ApplicationARN,omitempty"`
	ApplicationVersionID        *int64                       `json:"ApplicationVersionId,omitempty"`
	VpcConfigurationDescription *VpcConfigurationDescription `json:"VpcConfigurationDescription,omitempty"`
}
