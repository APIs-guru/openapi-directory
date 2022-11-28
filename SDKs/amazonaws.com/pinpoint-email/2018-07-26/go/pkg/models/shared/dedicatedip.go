package shared

// DedicatedIP
// <p>Contains information about a dedicated IP address that is associated with your Amazon Pinpoint account.</p> <p/>
type DedicatedIP struct {
	IP               string           `json:"Ip"`
	PoolName         *string          `json:"PoolName,omitempty"`
	WarmupPercentage int64            `json:"WarmupPercentage"`
	WarmupStatus     WarmupStatusEnum `json:"WarmupStatus"`
}
