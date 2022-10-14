package shared

type Definition struct {
	DataType      *string `json:"dataType,omitempty"`
	Key           *string `json:"key,omitempty"`
	LocalizedName *string `json:"localizedName,omitempty"`
}
