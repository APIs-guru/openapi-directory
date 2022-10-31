package shared

type Config struct {
	Providers map[string]interface{} `json:"providers"`
	Topics    []interface{}          `json:"topics"`
}
