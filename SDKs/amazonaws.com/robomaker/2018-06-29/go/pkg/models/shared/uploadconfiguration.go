package shared

// UploadConfiguration
// Provides upload configuration information. Files are uploaded from the simulation job to a location you specify.
type UploadConfiguration struct {
	Name           string             `json:"name"`
	Path           string             `json:"path"`
	UploadBehavior UploadBehaviorEnum `json:"uploadBehavior"`
}
