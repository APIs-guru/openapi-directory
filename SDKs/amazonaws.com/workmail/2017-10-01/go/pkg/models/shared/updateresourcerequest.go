package shared

type UpdateResourceRequest struct {
	BookingOptions *BookingOptions `json:"BookingOptions,omitempty"`
	Name           *string         `json:"Name,omitempty"`
	OrganizationID string          `json:"OrganizationId"`
	ResourceID     string          `json:"ResourceId"`
}
