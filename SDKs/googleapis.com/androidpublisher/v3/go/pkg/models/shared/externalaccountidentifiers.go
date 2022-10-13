package shared

type ExternalAccountIdentifiers struct {
	ExternalAccountID           *string `json:"externalAccountId"`
	ObfuscatedExternalAccountID *string `json:"obfuscatedExternalAccountId"`
	ObfuscatedExternalProfileID *string `json:"obfuscatedExternalProfileId"`
}
