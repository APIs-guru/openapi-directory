package shared

// Row
// A single row in the confusion matrix.
type Row struct {
	ActualLabel *string `json:"actualLabel,omitempty"`
	Entries     []Entry `json:"entries,omitempty"`
}
