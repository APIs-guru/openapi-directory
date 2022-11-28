package shared

// ExternalAccountIdentifiers
// User account identifier in the third-party service.
type ExternalAccountIdentifiers struct {
	ExternalAccountID           *string `json:"externalAccountId,omitempty"`
	ObfuscatedExternalAccountID *string `json:"obfuscatedExternalAccountId,omitempty"`
	ObfuscatedExternalProfileID *string `json:"obfuscatedExternalProfileId,omitempty"`
}
