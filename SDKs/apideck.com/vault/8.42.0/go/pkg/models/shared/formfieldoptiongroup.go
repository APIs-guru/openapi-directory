package shared

type FormFieldOptionGroup struct {
	ID      *string                 `json:"id"`
	Label   *string                 `json:"label"`
	Options []SimpleFormFieldOption `json:"options"`
}
