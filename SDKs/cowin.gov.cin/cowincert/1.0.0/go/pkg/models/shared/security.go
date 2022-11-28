package shared

type SchemeCertAuth struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeAPIKey struct {
	APIKey string `security:"name=Authorization"`
}
