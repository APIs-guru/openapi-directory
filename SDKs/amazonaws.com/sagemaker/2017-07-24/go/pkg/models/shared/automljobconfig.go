package shared

// AutoMlJobConfig
// A collection of settings used for an AutoML job.
type AutoMlJobConfig struct {
	CompletionCriteria *AutoMlJobCompletionCriteria `json:"CompletionCriteria,omitempty"`
	SecurityConfig     *AutoMlSecurityConfig        `json:"SecurityConfig,omitempty"`
}
