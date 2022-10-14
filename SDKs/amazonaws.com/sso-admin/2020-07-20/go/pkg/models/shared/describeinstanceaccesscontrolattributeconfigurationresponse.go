package shared

type DescribeInstanceAccessControlAttributeConfigurationResponse struct {
	InstanceAccessControlAttributeConfiguration *InstanceAccessControlAttributeConfiguration           `json:"InstanceAccessControlAttributeConfiguration,omitempty"`
	Status                                      *InstanceAccessControlAttributeConfigurationStatusEnum `json:"Status,omitempty"`
	StatusReason                                *string                                                `json:"StatusReason,omitempty"`
}
