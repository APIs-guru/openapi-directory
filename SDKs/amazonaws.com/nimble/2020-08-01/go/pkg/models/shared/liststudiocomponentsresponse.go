package shared

type ListStudioComponentsResponse struct {
	NextToken        *string           `json:"nextToken,omitempty"`
	StudioComponents []StudioComponent `json:"studioComponents,omitempty"`
}
