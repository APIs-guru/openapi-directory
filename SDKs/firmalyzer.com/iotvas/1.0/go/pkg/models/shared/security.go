package shared

type SchemeAPIKeyHeader struct {
	APIKey string `security:"name=x-api-key"`
}
