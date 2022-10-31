package shared



type ServiceQuota struct {
    Adjustable *bool `json:"Adjustable,omitempty"`
    ErrorReason *ErrorReason `json:"ErrorReason,omitempty"`
    GlobalQuota *bool `json:"GlobalQuota,omitempty"`
    Period *QuotaPeriod `json:"Period,omitempty"`
    QuotaArn *string `json:"QuotaArn,omitempty"`
    QuotaCode *string `json:"QuotaCode,omitempty"`
    QuotaName *string `json:"QuotaName,omitempty"`
    ServiceCode *string `json:"ServiceCode,omitempty"`
    ServiceName *string `json:"ServiceName,omitempty"`
    Unit *string `json:"Unit,omitempty"`
    UsageMetric *MetricInfo `json:"UsageMetric,omitempty"`
    Value *float64 `json:"Value,omitempty"`
    
}

