package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=Authorization"`
}

type SchemeBasic struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeOauth2 struct {
	Authorization string `security:"name=Authorization"`
}
