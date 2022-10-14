package shared

type AutomaticScaling struct {
	CoolDownPeriod            *string                    `json:"coolDownPeriod,omitempty"`
	CPUUtilization            *CPUUtilization            `json:"cpuUtilization,omitempty"`
	DiskUtilization           *DiskUtilization           `json:"diskUtilization,omitempty"`
	MaxConcurrentRequests     *int32                     `json:"maxConcurrentRequests,omitempty"`
	MaxIdleInstances          *int32                     `json:"maxIdleInstances,omitempty"`
	MaxPendingLatency         *string                    `json:"maxPendingLatency,omitempty"`
	MaxTotalInstances         *int32                     `json:"maxTotalInstances,omitempty"`
	MinIdleInstances          *int32                     `json:"minIdleInstances,omitempty"`
	MinPendingLatency         *string                    `json:"minPendingLatency,omitempty"`
	MinTotalInstances         *int32                     `json:"minTotalInstances,omitempty"`
	NetworkUtilization        *NetworkUtilization        `json:"networkUtilization,omitempty"`
	RequestUtilization        *RequestUtilization        `json:"requestUtilization,omitempty"`
	StandardSchedulerSettings *StandardSchedulerSettings `json:"standardSchedulerSettings,omitempty"`
}
