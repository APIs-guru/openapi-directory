package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=Authorization"`
}

type SchemeBasic struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}

type SchemeOauth2 struct {
	Authorization string `security:"name=Authorization"`
}
