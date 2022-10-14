package shared

type ChoosePrivateKeyRule struct {
	PackageNames    []string `json:"packageNames,omitempty"`
	PrivateKeyAlias *string  `json:"privateKeyAlias,omitempty"`
	URLPattern      *string  `json:"urlPattern,omitempty"`
}
