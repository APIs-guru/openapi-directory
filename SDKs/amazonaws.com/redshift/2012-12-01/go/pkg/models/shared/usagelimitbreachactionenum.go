package shared

type UsageLimitBreachActionEnum string

const (
	UsageLimitBreachActionEnumLog        UsageLimitBreachActionEnum = "log"
	UsageLimitBreachActionEnumEmitMetric UsageLimitBreachActionEnum = "emit-metric"
	UsageLimitBreachActionEnumDisable    UsageLimitBreachActionEnum = "disable"
)
