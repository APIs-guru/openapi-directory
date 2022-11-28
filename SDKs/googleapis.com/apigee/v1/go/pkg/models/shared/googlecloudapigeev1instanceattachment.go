package shared

// GoogleCloudApigeeV1InstanceAttachment
// InstanceAttachment represents the installation of an environment onto an instance.
type GoogleCloudApigeeV1InstanceAttachment struct {
	CreatedAt   *string `json:"createdAt,omitempty"`
	Environment *string `json:"environment,omitempty"`
	Name        *string `json:"name,omitempty"`
}

// GoogleCloudApigeeV1InstanceAttachmentInput
// InstanceAttachment represents the installation of an environment onto an instance.
type GoogleCloudApigeeV1InstanceAttachmentInput struct {
	Environment *string `json:"environment,omitempty"`
}
