package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=X-BigOven-API-Key"`
}

type SchemeBasic struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}
