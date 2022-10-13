package shared

type ResourceRecord struct {
	Name  *string `json:"name"`
	Type  *string `json:"type"`
	Value *string `json:"value"`
}
