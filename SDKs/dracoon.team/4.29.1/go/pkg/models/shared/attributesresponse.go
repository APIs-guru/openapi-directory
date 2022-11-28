package shared

// AttributesResponse
// Ranged list of attributes
type AttributesResponse struct {
	Items []KeyValueEntry `json:"items"`
	Range Range           `json:"range"`
}
