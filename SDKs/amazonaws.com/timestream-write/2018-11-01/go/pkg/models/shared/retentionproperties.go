package shared

// RetentionProperties
// Retention properties contain the duration for which your time series data must be stored in the magnetic store and the memory store.
type RetentionProperties struct {
	MagneticStoreRetentionPeriodInDays int64 `json:"MagneticStoreRetentionPeriodInDays"`
	MemoryStoreRetentionPeriodInHours  int64 `json:"MemoryStoreRetentionPeriodInHours"`
}
