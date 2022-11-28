package shared

import (
	"time"
)

// ExportSnapshotRecordSourceInfo
// Describes the source of an export snapshot record.
type ExportSnapshotRecordSourceInfo struct {
	Arn                  *string                             `json:"arn,omitempty"`
	CreatedAt            *time.Time                          `json:"createdAt,omitempty"`
	DiskSnapshotInfo     *DiskSnapshotInfo                   `json:"diskSnapshotInfo,omitempty"`
	FromResourceArn      *string                             `json:"fromResourceArn,omitempty"`
	FromResourceName     *string                             `json:"fromResourceName,omitempty"`
	InstanceSnapshotInfo *InstanceSnapshotInfo               `json:"instanceSnapshotInfo,omitempty"`
	Name                 *string                             `json:"name,omitempty"`
	ResourceType         *ExportSnapshotRecordSourceTypeEnum `json:"resourceType,omitempty"`
}
