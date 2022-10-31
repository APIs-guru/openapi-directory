package shared

import (
"time")

type AuditNodeResponse struct {
    AuditUserPermissionList []AuditUserPermission `json:"auditUserPermissionList"`
    NodeCntChildren int32 `json:"nodeCntChildren"`
    NodeCreatedAt *time.Time `json:"nodeCreatedAt,omitempty"`
    NodeCreatedBy *UserInfo `json:"nodeCreatedBy,omitempty"`
    NodeHasActivitiesLog *bool `json:"nodeHasActivitiesLog,omitempty"`
    NodeHasRecycleBin *bool `json:"nodeHasRecycleBin,omitempty"`
    NodeID int64 `json:"nodeId"`
    NodeIsEncrypted *bool `json:"nodeIsEncrypted,omitempty"`
    NodeName string `json:"nodeName"`
    NodeParentID *int64 `json:"nodeParentId,omitempty"`
    NodeParentPath string `json:"nodeParentPath"`
    NodeQuota *int64 `json:"nodeQuota,omitempty"`
    NodeRecycleBinRetentionPeriod *int32 `json:"nodeRecycleBinRetentionPeriod,omitempty"`
    NodeSize *int64 `json:"nodeSize,omitempty"`
    NodeUpdatedAt *time.Time `json:"nodeUpdatedAt,omitempty"`
    NodeUpdatedBy *UserInfo `json:"nodeUpdatedBy,omitempty"`
    
}

