package shared

type PostFormFieldSetsFormFields struct {
	DefaultOption    *string `json:"default_option,omitempty"`
	FieldType        *string `json:"field_type,omitempty"`
	HelpText         *string `json:"help_text,omitempty"`
	ID               *int32  `json:"id,omitempty"`
	Label            *string `json:"label,omitempty"`
	OptionsForSelect *string `json:"options_for_select,omitempty"`
	Required         *bool   `json:"required,omitempty"`
}

// PostFormFieldSets
// Create Form Field Set
type PostFormFieldSets struct {
	FormFields  []PostFormFieldSetsFormFields `json:"form_fields,omitempty"`
	SkipCompany *bool                         `json:"skip_company,omitempty"`
	SkipEmail   *bool                         `json:"skip_email,omitempty"`
	SkipName    *bool                         `json:"skip_name,omitempty"`
	Title       *string                       `json:"title,omitempty"`
	UserID      *int32                        `json:"user_id,omitempty"`
}
