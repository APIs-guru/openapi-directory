package shared

// Definition
// A complex type that defines a dimension key and metrics in a traffic report.
type Definition struct {
	DataType      *string `json:"dataType,omitempty"`
	Key           *string `json:"key,omitempty"`
	LocalizedName *string `json:"localizedName,omitempty"`
}
