package shared

type ParquetOptions struct {
	EnableListInference *bool `json:"enableListInference,omitempty"`
	EnumAsString        *bool `json:"enumAsString,omitempty"`
}
