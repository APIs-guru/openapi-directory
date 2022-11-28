package shared

// CustomChannelInput
// Representation of a custom channel.
type CustomChannelInput struct {
	Active      *bool   `json:"active,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
}

// CustomChannel
// Representation of a custom channel.
type CustomChannel struct {
	Active               *bool   `json:"active,omitempty"`
	DisplayName          *string `json:"displayName,omitempty"`
	Name                 *string `json:"name,omitempty"`
	ReportingDimensionID *string `json:"reportingDimensionId,omitempty"`
}
