package shared

import (
	"time"
)

type InstancePatchState struct {
	BaselineID                       string                 `json:"BaselineId"`
	CriticalNonCompliantCount        *int64                 `json:"CriticalNonCompliantCount"`
	FailedCount                      *int64                 `json:"FailedCount"`
	InstallOverrideList              *string                `json:"InstallOverrideList"`
	InstalledCount                   *int64                 `json:"InstalledCount"`
	InstalledOtherCount              *int64                 `json:"InstalledOtherCount"`
	InstalledPendingRebootCount      *int64                 `json:"InstalledPendingRebootCount"`
	InstalledRejectedCount           *int64                 `json:"InstalledRejectedCount"`
	InstanceID                       string                 `json:"InstanceId"`
	LastNoRebootInstallOperationTime *time.Time             `json:"LastNoRebootInstallOperationTime"`
	MissingCount                     *int64                 `json:"MissingCount"`
	NotApplicableCount               *int64                 `json:"NotApplicableCount"`
	Operation                        PatchOperationTypeEnum `json:"Operation"`
	OperationEndTime                 time.Time              `json:"OperationEndTime"`
	OperationStartTime               time.Time              `json:"OperationStartTime"`
	OtherNonCompliantCount           *int64                 `json:"OtherNonCompliantCount"`
	OwnerInformation                 *string                `json:"OwnerInformation"`
	PatchGroup                       string                 `json:"PatchGroup"`
	RebootOption                     *RebootOptionEnum      `json:"RebootOption"`
	SecurityNonCompliantCount        *int64                 `json:"SecurityNonCompliantCount"`
	SnapshotID                       *string                `json:"SnapshotId"`
	UnreportedNotApplicableCount     *int64                 `json:"UnreportedNotApplicableCount"`
}
