package shared

type GoogleCloudApigeeV1ListInstanceAttachmentsResponse struct {
	Attachments   []GoogleCloudApigeeV1InstanceAttachment `json:"attachments"`
	NextPageToken *string                                 `json:"nextPageToken"`
}
