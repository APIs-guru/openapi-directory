package shared

// V2AndroidKeyRestrictions
// The Android apps that are allowed to use the key.
type V2AndroidKeyRestrictions struct {
	AllowedApplications []V2AndroidApplication `json:"allowedApplications,omitempty"`
}
