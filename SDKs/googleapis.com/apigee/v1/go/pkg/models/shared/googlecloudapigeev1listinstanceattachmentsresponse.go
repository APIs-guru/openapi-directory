package shared

// GoogleCloudApigeeV1ListInstanceAttachmentsResponse
// Response for ListInstanceAttachments.
type GoogleCloudApigeeV1ListInstanceAttachmentsResponse struct {
	Attachments   []GoogleCloudApigeeV1InstanceAttachment `json:"attachments,omitempty"`
	NextPageToken *string                                 `json:"nextPageToken,omitempty"`
}
