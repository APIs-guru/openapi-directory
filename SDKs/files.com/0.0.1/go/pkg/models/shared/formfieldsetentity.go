package shared

type FormFieldSetEntity struct {
	FormFields  *FormFieldEntity `json:"form_fields,omitempty"`
	FormLayout  *int32           `json:"form_layout,omitempty"`
	ID          *int32           `json:"id,omitempty"`
	SkipCompany *bool            `json:"skip_company,omitempty"`
	SkipEmail   *bool            `json:"skip_email,omitempty"`
	SkipName    *bool            `json:"skip_name,omitempty"`
	Title       *string          `json:"title,omitempty"`
}
