package shared

type DescribeInstanceAccessControlAttributeConfigurationResponse struct {
	InstanceAccessControlAttributeConfiguration *InstanceAccessControlAttributeConfiguration           `json:"InstanceAccessControlAttributeConfiguration"`
	Status                                      *InstanceAccessControlAttributeConfigurationStatusEnum `json:"Status"`
	StatusReason                                *string                                                `json:"StatusReason"`
}
