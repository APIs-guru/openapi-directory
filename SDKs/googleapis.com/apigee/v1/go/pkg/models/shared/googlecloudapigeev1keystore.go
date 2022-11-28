package shared

// GoogleCloudApigeeV1Keystore
// Datastore for Certificates and Aliases.
type GoogleCloudApigeeV1Keystore struct {
	Aliases []string `json:"aliases,omitempty"`
	Name    *string  `json:"name,omitempty"`
}

// GoogleCloudApigeeV1KeystoreInput
// Datastore for Certificates and Aliases.
type GoogleCloudApigeeV1KeystoreInput struct {
	Name *string `json:"name,omitempty"`
}
