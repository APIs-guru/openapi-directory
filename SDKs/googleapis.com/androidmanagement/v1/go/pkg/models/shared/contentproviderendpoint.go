package shared

type ContentProviderEndpoint struct {
	PackageName        *string  `json:"packageName"`
	SigningCertsSha256 []string `json:"signingCertsSha256"`
	URI                *string  `json:"uri"`
}
