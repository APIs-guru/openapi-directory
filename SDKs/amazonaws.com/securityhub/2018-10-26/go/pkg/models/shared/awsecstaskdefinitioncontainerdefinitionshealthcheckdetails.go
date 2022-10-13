package shared

type AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails struct {
	Command     []string `json:"Command"`
	Interval    *int64   `json:"Interval"`
	Retries     *int64   `json:"Retries"`
	StartPeriod *int64   `json:"StartPeriod"`
	Timeout     *int64   `json:"Timeout"`
}
