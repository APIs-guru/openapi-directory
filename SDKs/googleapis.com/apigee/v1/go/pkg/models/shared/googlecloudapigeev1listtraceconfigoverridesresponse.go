package shared

type GoogleCloudApigeeV1ListTraceConfigOverridesResponse struct {
	NextPageToken        *string                                  `json:"nextPageToken,omitempty"`
	TraceConfigOverrides []GoogleCloudApigeeV1TraceConfigOverride `json:"traceConfigOverrides,omitempty"`
}
