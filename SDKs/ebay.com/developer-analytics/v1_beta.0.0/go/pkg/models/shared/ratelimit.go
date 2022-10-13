package shared

type RateLimit struct {
	APIContext *string    `json:"apiContext"`
	APIName    *string    `json:"apiName"`
	APIVersion *string    `json:"apiVersion"`
	Resources  []Resource `json:"resources"`
}
