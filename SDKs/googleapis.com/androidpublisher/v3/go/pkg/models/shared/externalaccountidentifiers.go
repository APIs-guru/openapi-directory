package shared

type ExternalAccountIdentifiers struct {
	ExternalAccountID           *string `json:"externalAccountId,omitempty"`
	ObfuscatedExternalAccountID *string `json:"obfuscatedExternalAccountId,omitempty"`
	ObfuscatedExternalProfileID *string `json:"obfuscatedExternalProfileId,omitempty"`
}
