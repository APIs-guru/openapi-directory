package shared

type AutomaticScaling struct {
	CoolDownPeriod            *string                    `json:"coolDownPeriod"`
	CPUUtilization            *CPUUtilization            `json:"cpuUtilization"`
	DiskUtilization           *DiskUtilization           `json:"diskUtilization"`
	MaxConcurrentRequests     *int32                     `json:"maxConcurrentRequests"`
	MaxIdleInstances          *int32                     `json:"maxIdleInstances"`
	MaxPendingLatency         *string                    `json:"maxPendingLatency"`
	MaxTotalInstances         *int32                     `json:"maxTotalInstances"`
	MinIdleInstances          *int32                     `json:"minIdleInstances"`
	MinPendingLatency         *string                    `json:"minPendingLatency"`
	MinTotalInstances         *int32                     `json:"minTotalInstances"`
	NetworkUtilization        *NetworkUtilization        `json:"networkUtilization"`
	RequestUtilization        *RequestUtilization        `json:"requestUtilization"`
	StandardSchedulerSettings *StandardSchedulerSettings `json:"standardSchedulerSettings"`
}
