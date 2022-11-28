package shared

// MapIterationEventDetails
// Contains details about an iteration of a Map state.
type MapIterationEventDetails struct {
	Index *int64  `json:"index,omitempty"`
	Name  *string `json:"name,omitempty"`
}
