package shared

// BundleRegistrationEntity
// List Bundle Registrations
type BundleRegistrationEntity struct {
	ClickwrapBody  *string `json:"clickwrap_body,omitempty"`
	Code           *string `json:"code,omitempty"`
	Company        *string `json:"company,omitempty"`
	Email          *string `json:"email,omitempty"`
	FormFieldData  *string `json:"form_field_data,omitempty"`
	FormFieldSetID *int32  `json:"form_field_set_id,omitempty"`
	InboxCode      *string `json:"inbox_code,omitempty"`
	IP             *string `json:"ip,omitempty"`
	Name           *string `json:"name,omitempty"`
}
