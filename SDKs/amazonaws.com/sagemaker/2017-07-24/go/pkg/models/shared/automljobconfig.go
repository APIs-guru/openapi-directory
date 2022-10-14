package shared

type AutoMlJobConfig struct {
	CompletionCriteria *AutoMlJobCompletionCriteria `json:"CompletionCriteria,omitempty"`
	SecurityConfig     *AutoMlSecurityConfig        `json:"SecurityConfig,omitempty"`
}
