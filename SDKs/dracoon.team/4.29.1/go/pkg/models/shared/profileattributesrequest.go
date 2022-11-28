package shared

// ProfileAttributesRequest
// Request model for setting user profile attributes
type ProfileAttributesRequest struct {
	Items []KeyValueEntry `json:"items"`
}
