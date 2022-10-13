package shared

type PatchSummary struct {
	FailedCount            *int64  `json:"FailedCount"`
	ID                     string  `json:"Id"`
	InstalledCount         *int64  `json:"InstalledCount"`
	InstalledOtherCount    *int64  `json:"InstalledOtherCount"`
	InstalledPendingReboot *int64  `json:"InstalledPendingReboot"`
	InstalledRejectedCount *int64  `json:"InstalledRejectedCount"`
	MissingCount           *int64  `json:"MissingCount"`
	Operation              *string `json:"Operation"`
	OperationEndTime       *string `json:"OperationEndTime"`
	OperationStartTime     *string `json:"OperationStartTime"`
	RebootOption           *string `json:"RebootOption"`
}
