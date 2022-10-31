package shared

type APIOverviewSSHKeyFingerprints struct {
	Sha256Dsa *string `json:"SHA256_DSA,omitempty"`
	Sha256Rsa *string `json:"SHA256_RSA,omitempty"`
}

type APIOverview struct {
	Actions                          []string                       `json:"actions,omitempty"`
	API                              []string                       `json:"api,omitempty"`
	Git                              []string                       `json:"git,omitempty"`
	Hooks                            []string                       `json:"hooks,omitempty"`
	Importer                         []string                       `json:"importer,omitempty"`
	Pages                            []string                       `json:"pages,omitempty"`
	SSHKeyFingerprints               *APIOverviewSSHKeyFingerprints `json:"ssh_key_fingerprints,omitempty"`
	VerifiablePasswordAuthentication bool                           `json:"verifiable_password_authentication"`
	Web                              []string                       `json:"web,omitempty"`
}
