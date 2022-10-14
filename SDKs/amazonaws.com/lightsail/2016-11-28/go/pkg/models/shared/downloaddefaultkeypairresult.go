package shared

type DownloadDefaultKeyPairResult struct {
	PrivateKeyBase64 *string `json:"privateKeyBase64,omitempty"`
	PublicKeyBase64  *string `json:"publicKeyBase64,omitempty"`
}
