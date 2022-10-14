package shared

type GoogleCloudApigeeV1TLSInfo struct {
	Ciphers                []string                              `json:"ciphers,omitempty"`
	ClientAuthEnabled      *bool                                 `json:"clientAuthEnabled,omitempty"`
	CommonName             *GoogleCloudApigeeV1TLSInfoCommonName `json:"commonName,omitempty"`
	Enabled                *bool                                 `json:"enabled,omitempty"`
	IgnoreValidationErrors *bool                                 `json:"ignoreValidationErrors,omitempty"`
	KeyAlias               *string                               `json:"keyAlias,omitempty"`
	KeyStore               *string                               `json:"keyStore,omitempty"`
	Protocols              []string                              `json:"protocols,omitempty"`
	TrustStore             *string                               `json:"trustStore,omitempty"`
}
