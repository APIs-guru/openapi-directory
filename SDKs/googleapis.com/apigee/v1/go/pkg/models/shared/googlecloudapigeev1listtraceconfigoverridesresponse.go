package shared

// GoogleCloudApigeeV1ListTraceConfigOverridesResponse
// Response for ListTraceConfigOverrides.
type GoogleCloudApigeeV1ListTraceConfigOverridesResponse struct {
	NextPageToken        *string                                  `json:"nextPageToken,omitempty"`
	TraceConfigOverrides []GoogleCloudApigeeV1TraceConfigOverride `json:"traceConfigOverrides,omitempty"`
}
