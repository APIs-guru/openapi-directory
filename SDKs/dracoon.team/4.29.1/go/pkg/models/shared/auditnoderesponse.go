package shared

import (
	"time"
)

type AuditNodeResponse struct {
	AuditUserPermissionList       []AuditUserPermission `json:"auditUserPermissionList"`
	NodeCntChildren               int32                 `json:"nodeCntChildren"`
	NodeCreatedAt                 *time.Time            `json:"nodeCreatedAt"`
	NodeCreatedBy                 *UserInfo             `json:"nodeCreatedBy"`
	NodeHasActivitiesLog          *bool                 `json:"nodeHasActivitiesLog"`
	NodeHasRecycleBin             *bool                 `json:"nodeHasRecycleBin"`
	NodeID                        int64                 `json:"nodeId"`
	NodeIsEncrypted               *bool                 `json:"nodeIsEncrypted"`
	NodeName                      string                `json:"nodeName"`
	NodeParentID                  *int64                `json:"nodeParentId"`
	NodeParentPath                string                `json:"nodeParentPath"`
	NodeQuota                     *int64                `json:"nodeQuota"`
	NodeRecycleBinRetentionPeriod *int32                `json:"nodeRecycleBinRetentionPeriod"`
	NodeSize                      *int64                `json:"nodeSize"`
	NodeUpdatedAt                 *time.Time            `json:"nodeUpdatedAt"`
	NodeUpdatedBy                 *UserInfo             `json:"nodeUpdatedBy"`
}
