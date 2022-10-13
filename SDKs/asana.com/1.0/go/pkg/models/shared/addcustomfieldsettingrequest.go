package shared

type AddCustomFieldSettingRequest struct {
	CustomField  string  `json:"custom_field"`
	InsertAfter  *string `json:"insert_after"`
	InsertBefore *string `json:"insert_before"`
	IsImportant  *bool   `json:"is_important"`
}
