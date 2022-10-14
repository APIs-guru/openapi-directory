package shared

type Attachment struct {
	EndpointID *string               `json:"EndpointId,omitempty"`
	Status     *AttachmentStatusEnum `json:"Status,omitempty"`
	SubnetID   *string               `json:"SubnetId,omitempty"`
}
