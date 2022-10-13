package shared

type BorrowConfiguration struct {
	AllowEarlyCheckIn      bool  `json:"AllowEarlyCheckIn"`
	MaxTimeToLiveInMinutes int64 `json:"MaxTimeToLiveInMinutes"`
}
