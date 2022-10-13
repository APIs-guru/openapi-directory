package shared

type FormFieldSetEntity struct {
	FormFields  *FormFieldEntity `json:"form_fields"`
	FormLayout  *int32           `json:"form_layout"`
	ID          *int32           `json:"id"`
	SkipCompany *bool            `json:"skip_company"`
	SkipEmail   *bool            `json:"skip_email"`
	SkipName    *bool            `json:"skip_name"`
	Title       *string          `json:"title"`
}
