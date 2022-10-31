package shared

type PackagesBillingUsage struct {
	IncludedGigabytesBandwidth      int64 `json:"included_gigabytes_bandwidth"`
	TotalGigabytesBandwidthUsed     int64 `json:"total_gigabytes_bandwidth_used"`
	TotalPaidGigabytesBandwidthUsed int64 `json:"total_paid_gigabytes_bandwidth_used"`
}
