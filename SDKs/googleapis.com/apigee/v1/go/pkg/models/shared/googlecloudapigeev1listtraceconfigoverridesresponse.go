package shared

type GoogleCloudApigeeV1ListTraceConfigOverridesResponse struct {
	NextPageToken        *string                                  `json:"nextPageToken"`
	TraceConfigOverrides []GoogleCloudApigeeV1TraceConfigOverride `json:"traceConfigOverrides"`
}
