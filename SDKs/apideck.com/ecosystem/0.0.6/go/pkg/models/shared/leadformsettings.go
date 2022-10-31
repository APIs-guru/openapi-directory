package shared

type LeadFormSettings struct {
	CaptureFormEnabled     *bool `json:"capture_form_enabled,omitempty"`
	FirstNameFieldEnabled  *bool `json:"first_name_field_enabled,omitempty"`
	FirstNameFieldRequired *bool `json:"first_name_field_required,omitempty"`
	IntegrationEnabled     *bool `json:"integration_enabled,omitempty"`
	LastNameFieldEnabled   *bool `json:"last_name_field_enabled,omitempty"`
	LastNameFieldRequired  *bool `json:"last_name_field_required,omitempty"`
	TelephoneFieldEnabled  *bool `json:"telephone_field_enabled,omitempty"`
	TelephoneFieldRequired *bool `json:"telephone_field_required,omitempty"`
	WorkEmailValidation    *bool `json:"work_email_validation,omitempty"`
}
