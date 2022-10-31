package shared



type GoogleCloudApigeeV1Score struct {
    Component *GoogleCloudApigeeV1ScoreComponent `json:"component,omitempty"`
    Subcomponents []GoogleCloudApigeeV1ScoreComponent `json:"subcomponents,omitempty"`
    TimeRange *GoogleTypeInterval `json:"timeRange,omitempty"`
    
}

