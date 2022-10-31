package shared



type DedicatedIP struct {
    IP string `json:"Ip"`
    PoolName *string `json:"PoolName,omitempty"`
    WarmupPercentage int64 `json:"WarmupPercentage"`
    WarmupStatus WarmupStatusEnum `json:"WarmupStatus"`
    
}

