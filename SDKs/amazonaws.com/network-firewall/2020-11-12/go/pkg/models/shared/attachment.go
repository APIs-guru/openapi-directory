package shared

type Attachment struct {
	EndpointID *string               `json:"EndpointId"`
	Status     *AttachmentStatusEnum `json:"Status"`
	SubnetID   *string               `json:"SubnetId"`
}
