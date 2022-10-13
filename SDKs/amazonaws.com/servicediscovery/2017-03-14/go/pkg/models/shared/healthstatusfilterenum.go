package shared

type HealthStatusFilterEnum string

const (
	HealthStatusFilterEnumHealthy          HealthStatusFilterEnum = "HEALTHY"
	HealthStatusFilterEnumUnhealthy        HealthStatusFilterEnum = "UNHEALTHY"
	HealthStatusFilterEnumAll              HealthStatusFilterEnum = "ALL"
	HealthStatusFilterEnumHealthyOrElseAll HealthStatusFilterEnum = "HEALTHY_OR_ELSE_ALL"
)
