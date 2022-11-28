package shared

// Attachment
// The configuration and status for a single subnet that you've specified for use by the AWS Network Firewall firewall. This is part of the <a>FirewallStatus</a>.
type Attachment struct {
	EndpointID *string               `json:"EndpointId,omitempty"`
	Status     *AttachmentStatusEnum `json:"Status,omitempty"`
	SubnetID   *string               `json:"SubnetId,omitempty"`
}
