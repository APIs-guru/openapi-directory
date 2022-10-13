package shared

type ParquetOptions struct {
	EnableListInference *bool `json:"enableListInference"`
	EnumAsString        *bool `json:"enumAsString"`
}
