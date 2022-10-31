package shared

type SchemeCustomkey2 struct {
	APIKey string `security:"name=X-2"`
}

type SchemeCustomkeys1 struct {
	APIKey string `security:"name=X1123"`
}

type SchemeBearerAuth struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeOauthAuthorizeCode struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeOauthsecurity struct {
	Authorization string `security:"name=Authorization"`
}
