package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=Authorization"`
}

type SchemeCertAuth struct {
	Authorization string `security:"name=Authorization"`
}
