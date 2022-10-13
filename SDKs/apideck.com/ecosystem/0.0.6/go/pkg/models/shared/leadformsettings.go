package shared

type LeadFormSettings struct {
	CaptureFormEnabled     *bool `json:"capture_form_enabled"`
	FirstNameFieldEnabled  *bool `json:"first_name_field_enabled"`
	FirstNameFieldRequired *bool `json:"first_name_field_required"`
	IntegrationEnabled     *bool `json:"integration_enabled"`
	LastNameFieldEnabled   *bool `json:"last_name_field_enabled"`
	LastNameFieldRequired  *bool `json:"last_name_field_required"`
	TelephoneFieldEnabled  *bool `json:"telephone_field_enabled"`
	TelephoneFieldRequired *bool `json:"telephone_field_required"`
	WorkEmailValidation    *bool `json:"work_email_validation"`
}
