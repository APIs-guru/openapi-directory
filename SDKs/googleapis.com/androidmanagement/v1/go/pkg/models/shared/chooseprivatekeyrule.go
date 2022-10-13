package shared

type ChoosePrivateKeyRule struct {
	PackageNames    []string `json:"packageNames"`
	PrivateKeyAlias *string  `json:"privateKeyAlias"`
	URLPattern      *string  `json:"urlPattern"`
}
