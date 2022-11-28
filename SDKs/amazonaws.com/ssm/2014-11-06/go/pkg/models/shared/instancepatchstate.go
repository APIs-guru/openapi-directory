package shared

import (
	"time"
)

// InstancePatchState
// Defines the high-level patch compliance state for a managed instance, providing information about the number of installed, missing, not applicable, and failed patches along with metadata about the operation when this information was gathered for the instance.
type InstancePatchState struct {
	BaselineID                       string                 `json:"BaselineId"`
	CriticalNonCompliantCount        *int64                 `json:"CriticalNonCompliantCount,omitempty"`
	FailedCount                      *int64                 `json:"FailedCount,omitempty"`
	InstallOverrideList              *string                `json:"InstallOverrideList,omitempty"`
	InstalledCount                   *int64                 `json:"InstalledCount,omitempty"`
	InstalledOtherCount              *int64                 `json:"InstalledOtherCount,omitempty"`
	InstalledPendingRebootCount      *int64                 `json:"InstalledPendingRebootCount,omitempty"`
	InstalledRejectedCount           *int64                 `json:"InstalledRejectedCount,omitempty"`
	InstanceID                       string                 `json:"InstanceId"`
	LastNoRebootInstallOperationTime *time.Time             `json:"LastNoRebootInstallOperationTime,omitempty"`
	MissingCount                     *int64                 `json:"MissingCount,omitempty"`
	NotApplicableCount               *int64                 `json:"NotApplicableCount,omitempty"`
	Operation                        PatchOperationTypeEnum `json:"Operation"`
	OperationEndTime                 time.Time              `json:"OperationEndTime"`
	OperationStartTime               time.Time              `json:"OperationStartTime"`
	OtherNonCompliantCount           *int64                 `json:"OtherNonCompliantCount,omitempty"`
	OwnerInformation                 *string                `json:"OwnerInformation,omitempty"`
	PatchGroup                       string                 `json:"PatchGroup"`
	RebootOption                     *RebootOptionEnum      `json:"RebootOption,omitempty"`
	SecurityNonCompliantCount        *int64                 `json:"SecurityNonCompliantCount,omitempty"`
	SnapshotID                       *string                `json:"SnapshotId,omitempty"`
	UnreportedNotApplicableCount     *int64                 `json:"UnreportedNotApplicableCount,omitempty"`
}
