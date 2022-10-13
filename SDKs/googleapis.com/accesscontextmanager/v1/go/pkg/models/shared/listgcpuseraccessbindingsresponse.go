package shared

type ListGcpUserAccessBindingsResponse struct {
	GcpUserAccessBindings []GcpUserAccessBinding `json:"gcpUserAccessBindings"`
	NextPageToken         *string                `json:"nextPageToken"`
}
