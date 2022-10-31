package shared

type SchemeAPIKeyAuth struct {
	APIKey string `security:"name=api_key"`
}
