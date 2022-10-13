package shared

type ListStudioComponentsResponse struct {
	NextToken        *string           `json:"nextToken"`
	StudioComponents []StudioComponent `json:"studioComponents"`
}
