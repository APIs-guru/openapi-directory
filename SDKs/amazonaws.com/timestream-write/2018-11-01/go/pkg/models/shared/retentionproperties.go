package shared

type RetentionProperties struct {
	MagneticStoreRetentionPeriodInDays int64 `json:"MagneticStoreRetentionPeriodInDays"`
	MemoryStoreRetentionPeriodInHours  int64 `json:"MemoryStoreRetentionPeriodInHours"`
}
