package shared

type Row struct {
	ActualLabel *string `json:"actualLabel"`
	Entries     []Entry `json:"entries"`
}
