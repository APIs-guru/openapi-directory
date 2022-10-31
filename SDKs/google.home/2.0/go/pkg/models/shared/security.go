package shared

type SchemeCastLocalAuthorizationToken struct {
	APIKey string `security:"name=cast-local-authorization-token"`
}

type Security struct {
	CastLocalAuthorizationToken SchemeCastLocalAuthorizationToken `security:"scheme,type=apiKey,subtype=header"`
}
