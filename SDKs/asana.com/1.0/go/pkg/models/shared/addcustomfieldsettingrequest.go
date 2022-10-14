package shared

type AddCustomFieldSettingRequest struct {
	CustomField  string  `json:"custom_field"`
	InsertAfter  *string `json:"insert_after,omitempty"`
	InsertBefore *string `json:"insert_before,omitempty"`
	IsImportant  *bool   `json:"is_important,omitempty"`
}
