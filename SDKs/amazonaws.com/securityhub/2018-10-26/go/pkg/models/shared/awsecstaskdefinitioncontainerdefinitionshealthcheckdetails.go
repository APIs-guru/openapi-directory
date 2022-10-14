package shared

type AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails struct {
	Command     []string `json:"Command,omitempty"`
	Interval    *int64   `json:"Interval,omitempty"`
	Retries     *int64   `json:"Retries,omitempty"`
	StartPeriod *int64   `json:"StartPeriod,omitempty"`
	Timeout     *int64   `json:"Timeout,omitempty"`
}
