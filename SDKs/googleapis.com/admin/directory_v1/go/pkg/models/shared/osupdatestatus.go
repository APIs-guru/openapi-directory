package shared

type OsUpdateStatusStateEnum string

const (
	OsUpdateStatusStateEnumUpdateStateUnspecified        OsUpdateStatusStateEnum = "updateStateUnspecified"
	OsUpdateStatusStateEnumUpdateStateNotStarted         OsUpdateStatusStateEnum = "updateStateNotStarted"
	OsUpdateStatusStateEnumUpdateStateDownloadInProgress OsUpdateStatusStateEnum = "updateStateDownloadInProgress"
	OsUpdateStatusStateEnumUpdateStateNeedReboot         OsUpdateStatusStateEnum = "updateStateNeedReboot"
)

type OsUpdateStatus struct {
	RebootTime            *string                  `json:"rebootTime"`
	State                 *OsUpdateStatusStateEnum `json:"state"`
	TargetKioskAppVersion *string                  `json:"targetKioskAppVersion"`
	TargetOsVersion       *string                  `json:"targetOsVersion"`
	UpdateCheckTime       *string                  `json:"updateCheckTime"`
	UpdateTime            *string                  `json:"updateTime"`
}
