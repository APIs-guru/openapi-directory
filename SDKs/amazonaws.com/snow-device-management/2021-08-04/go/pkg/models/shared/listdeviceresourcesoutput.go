package shared

type ListDeviceResourcesOutput struct {
	NextToken *string           `json:"nextToken"`
	Resources []ResourceSummary `json:"resources"`
}
