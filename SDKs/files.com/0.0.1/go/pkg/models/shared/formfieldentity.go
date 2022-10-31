package shared




type FormFieldEntityFieldTypeEnum string

const (
    FormFieldEntityFieldTypeEnumText FormFieldEntityFieldTypeEnum = "text"
FormFieldEntityFieldTypeEnumTextArea FormFieldEntityFieldTypeEnum = "text_area"
FormFieldEntityFieldTypeEnumDropdown FormFieldEntityFieldTypeEnum = "dropdown"
FormFieldEntityFieldTypeEnumRadio FormFieldEntityFieldTypeEnum = "radio"
)


type FormFieldEntity struct {
    DefaultOption *string `json:"default_option,omitempty"`
    FieldType *FormFieldEntityFieldTypeEnum `json:"field_type,omitempty"`
    FormFieldSetID *int32 `json:"form_field_set_id,omitempty"`
    HelpText *string `json:"help_text,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Label *string `json:"label,omitempty"`
    OptionsForSelect *string `json:"options_for_select,omitempty"`
    Required *bool `json:"required,omitempty"`
    
}

