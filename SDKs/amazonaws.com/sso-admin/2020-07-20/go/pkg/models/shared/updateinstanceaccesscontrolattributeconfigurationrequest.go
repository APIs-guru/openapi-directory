package shared

type UpdateInstanceAccessControlAttributeConfigurationRequest struct {
	InstanceAccessControlAttributeConfiguration InstanceAccessControlAttributeConfiguration `json:"InstanceAccessControlAttributeConfiguration"`
	InstanceArn                                 string                                      `json:"InstanceArn"`
}
