package shared

type Metadata struct {
	Items []ReportingMetadataEntry `json:"items"`
	Kind  *string                  `json:"kind"`
}
