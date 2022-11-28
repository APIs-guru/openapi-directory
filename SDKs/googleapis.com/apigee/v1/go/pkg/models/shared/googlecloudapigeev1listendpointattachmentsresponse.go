package shared

// GoogleCloudApigeeV1ListEndpointAttachmentsResponse
// Response for ListEndpointAttachments method.
type GoogleCloudApigeeV1ListEndpointAttachmentsResponse struct {
	EndpointAttachments []GoogleCloudApigeeV1EndpointAttachment `json:"endpointAttachments,omitempty"`
	NextPageToken       *string                                 `json:"nextPageToken,omitempty"`
}
