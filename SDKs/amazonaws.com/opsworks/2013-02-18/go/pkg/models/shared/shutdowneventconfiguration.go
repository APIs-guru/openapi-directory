package shared

type ShutdownEventConfiguration struct {
	DelayUntilElbConnectionsDrained *bool  `json:"DelayUntilElbConnectionsDrained"`
	ExecutionTimeout                *int64 `json:"ExecutionTimeout"`
}
