package shared

type AutoMlJobConfig struct {
	CompletionCriteria *AutoMlJobCompletionCriteria `json:"CompletionCriteria"`
	SecurityConfig     *AutoMlSecurityConfig        `json:"SecurityConfig"`
}
