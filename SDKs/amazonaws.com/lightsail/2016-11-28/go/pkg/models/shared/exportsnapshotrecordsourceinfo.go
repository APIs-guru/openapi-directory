package shared

import (
	"time"
)

type ExportSnapshotRecordSourceInfo struct {
	Arn                  *string                             `json:"arn"`
	CreatedAt            *time.Time                          `json:"createdAt"`
	DiskSnapshotInfo     *DiskSnapshotInfo                   `json:"diskSnapshotInfo"`
	FromResourceArn      *string                             `json:"fromResourceArn"`
	FromResourceName     *string                             `json:"fromResourceName"`
	InstanceSnapshotInfo *InstanceSnapshotInfo               `json:"instanceSnapshotInfo"`
	Name                 *string                             `json:"name"`
	ResourceType         *ExportSnapshotRecordSourceTypeEnum `json:"resourceType"`
}
