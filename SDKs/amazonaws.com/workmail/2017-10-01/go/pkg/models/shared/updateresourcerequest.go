package shared

type UpdateResourceRequest struct {
	BookingOptions *BookingOptions `json:"BookingOptions"`
	Name           *string         `json:"Name"`
	OrganizationID string          `json:"OrganizationId"`
	ResourceID     string          `json:"ResourceId"`
}
