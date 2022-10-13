package shared

type GoogleCloudApigeeV1ListEndpointAttachmentsResponse struct {
	EndpointAttachments []GoogleCloudApigeeV1EndpointAttachment `json:"endpointAttachments"`
	NextPageToken       *string                                 `json:"nextPageToken"`
}
