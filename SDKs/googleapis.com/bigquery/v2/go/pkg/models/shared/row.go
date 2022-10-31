package shared

type Row struct {
	ActualLabel *string `json:"actualLabel,omitempty"`
	Entries     []Entry `json:"entries,omitempty"`
}
