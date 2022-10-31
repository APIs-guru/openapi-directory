package shared

type Filter struct {
	Field string         `json:"Field"`
	Type  FilterTypeEnum `json:"Type"`
	Value string         `json:"Value"`
}
