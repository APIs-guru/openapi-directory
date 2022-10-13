package shared

type Slot struct {
	Value  *Value `json:"value"`
	Values []Slot `json:"values"`
}
