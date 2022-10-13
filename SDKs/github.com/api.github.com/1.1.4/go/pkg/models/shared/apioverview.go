package shared

type APIOverviewSSHKeyFingerprints struct {
	Sha256Dsa *string `json:"SHA256_DSA"`
	Sha256Rsa *string `json:"SHA256_RSA"`
}

type APIOverview struct {
	Actions                          []string                       `json:"actions"`
	API                              []string                       `json:"api"`
	Git                              []string                       `json:"git"`
	Hooks                            []string                       `json:"hooks"`
	Importer                         []string                       `json:"importer"`
	Pages                            []string                       `json:"pages"`
	SSHKeyFingerprints               *APIOverviewSSHKeyFingerprints `json:"ssh_key_fingerprints"`
	VerifiablePasswordAuthentication bool                           `json:"verifiable_password_authentication"`
	Web                              []string                       `json:"web"`
}
