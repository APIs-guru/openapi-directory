package shared

type PatchFormFieldSetsFormFields struct {
	DefaultOption    *string `json:"default_option,omitempty"`
	FieldType        *string `json:"field_type,omitempty"`
	HelpText         *string `json:"help_text,omitempty"`
	ID               *int32  `json:"id,omitempty"`
	Label            *string `json:"label,omitempty"`
	OptionsForSelect *string `json:"options_for_select,omitempty"`
	Required         *bool   `json:"required,omitempty"`
}

// PatchFormFieldSets
// Update Form Field Set
type PatchFormFieldSets struct {
	FormFields  []PatchFormFieldSetsFormFields `json:"form_fields,omitempty"`
	SkipCompany *bool                          `json:"skip_company,omitempty"`
	SkipEmail   *bool                          `json:"skip_email,omitempty"`
	SkipName    *bool                          `json:"skip_name,omitempty"`
	Title       *string                        `json:"title,omitempty"`
}
