package shared

// FetchInstanceProvisioningSettingsResponse
// Response with all provisioning settings.
type FetchInstanceProvisioningSettingsResponse struct {
	Images []OsImage `json:"images,omitempty"`
}
