package shared




type OsUpdateStatusStateEnum string

const (
    OsUpdateStatusStateEnumUpdateStateUnspecified OsUpdateStatusStateEnum = "updateStateUnspecified"
OsUpdateStatusStateEnumUpdateStateNotStarted OsUpdateStatusStateEnum = "updateStateNotStarted"
OsUpdateStatusStateEnumUpdateStateDownloadInProgress OsUpdateStatusStateEnum = "updateStateDownloadInProgress"
OsUpdateStatusStateEnumUpdateStateNeedReboot OsUpdateStatusStateEnum = "updateStateNeedReboot"
)


type OsUpdateStatus struct {
    RebootTime *string `json:"rebootTime,omitempty"`
    State *OsUpdateStatusStateEnum `json:"state,omitempty"`
    TargetKioskAppVersion *string `json:"targetKioskAppVersion,omitempty"`
    TargetOsVersion *string `json:"targetOsVersion,omitempty"`
    UpdateCheckTime *string `json:"updateCheckTime,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

