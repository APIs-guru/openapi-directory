package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=x-api-key"`
}

type SchemeFdcAuth struct {
	Authorization string `security:"name=Authorization"`
}
