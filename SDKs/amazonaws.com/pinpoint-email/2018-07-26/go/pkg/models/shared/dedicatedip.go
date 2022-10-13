package shared

type DedicatedIP struct {
	IP               string           `json:"Ip"`
	PoolName         *string          `json:"PoolName"`
	WarmupPercentage int64            `json:"WarmupPercentage"`
	WarmupStatus     WarmupStatusEnum `json:"WarmupStatus"`
}
