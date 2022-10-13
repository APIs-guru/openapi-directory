package shared

type SchemeKey2 struct {
	APIKey string `security:"name=X-Api-Key"`
}
