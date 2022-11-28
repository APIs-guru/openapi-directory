package shared

// BorrowConfiguration
// Details about a borrow configuration.
type BorrowConfiguration struct {
	AllowEarlyCheckIn      bool  `json:"AllowEarlyCheckIn"`
	MaxTimeToLiveInMinutes int64 `json:"MaxTimeToLiveInMinutes"`
}
