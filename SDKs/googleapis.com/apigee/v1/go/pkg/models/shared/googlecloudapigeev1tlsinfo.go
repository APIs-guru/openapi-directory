package shared

type GoogleCloudApigeeV1TLSInfo struct {
	Ciphers                []string                              `json:"ciphers"`
	ClientAuthEnabled      *bool                                 `json:"clientAuthEnabled"`
	CommonName             *GoogleCloudApigeeV1TLSInfoCommonName `json:"commonName"`
	Enabled                *bool                                 `json:"enabled"`
	IgnoreValidationErrors *bool                                 `json:"ignoreValidationErrors"`
	KeyAlias               *string                               `json:"keyAlias"`
	KeyStore               *string                               `json:"keyStore"`
	Protocols              []string                              `json:"protocols"`
	TrustStore             *string                               `json:"trustStore"`
}
