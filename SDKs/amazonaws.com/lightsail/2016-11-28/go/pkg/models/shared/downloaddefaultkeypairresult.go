package shared

type DownloadDefaultKeyPairResult struct {
	PrivateKeyBase64 *string `json:"privateKeyBase64"`
	PublicKeyBase64  *string `json:"publicKeyBase64"`
}
