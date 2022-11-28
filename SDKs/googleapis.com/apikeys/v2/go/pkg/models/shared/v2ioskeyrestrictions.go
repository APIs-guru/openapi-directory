package shared

// V2IosKeyRestrictions
// The iOS apps that are allowed to use the key.
type V2IosKeyRestrictions struct {
	AllowedBundleIds []string `json:"allowedBundleIds,omitempty"`
}
