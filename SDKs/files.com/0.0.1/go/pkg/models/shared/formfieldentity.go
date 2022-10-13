package shared

type FormFieldEntityFieldTypeEnum string

const (
	FormFieldEntityFieldTypeEnumText     FormFieldEntityFieldTypeEnum = "text"
	FormFieldEntityFieldTypeEnumTextArea FormFieldEntityFieldTypeEnum = "text_area"
	FormFieldEntityFieldTypeEnumDropdown FormFieldEntityFieldTypeEnum = "dropdown"
	FormFieldEntityFieldTypeEnumRadio    FormFieldEntityFieldTypeEnum = "radio"
)

type FormFieldEntity struct {
	DefaultOption    *string                       `json:"default_option"`
	FieldType        *FormFieldEntityFieldTypeEnum `json:"field_type"`
	FormFieldSetID   *int32                        `json:"form_field_set_id"`
	HelpText         *string                       `json:"help_text"`
	ID               *int32                        `json:"id"`
	Label            *string                       `json:"label"`
	OptionsForSelect *string                       `json:"options_for_select"`
	Required         *bool                         `json:"required"`
}
