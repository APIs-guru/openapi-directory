package shared

type FormFieldOptionGroup struct {
	ID      *string                 `json:"id,omitempty"`
	Label   *string                 `json:"label,omitempty"`
	Options []SimpleFormFieldOption `json:"options,omitempty"`
}
