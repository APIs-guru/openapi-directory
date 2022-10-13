package shared

type BundleRegistrationEntity struct {
	ClickwrapBody  *string `json:"clickwrap_body"`
	Code           *string `json:"code"`
	Company        *string `json:"company"`
	Email          *string `json:"email"`
	FormFieldData  *string `json:"form_field_data"`
	FormFieldSetID *int32  `json:"form_field_set_id"`
	InboxCode      *string `json:"inbox_code"`
	IP             *string `json:"ip"`
	Name           *string `json:"name"`
}
