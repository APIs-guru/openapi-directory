package shared

import (
	"time"
)

type AuditLogItemModel struct {
	ActionTarget     *string    `json:"actionTarget"`
	AuditLogDateTime *time.Time `json:"auditLogDateTime"`
	AuditLogID       *int64     `json:"auditLogId"`
	AuditLogType     *string    `json:"auditLogType"`
	Details          *string    `json:"details"`
	UserEmail        *string    `json:"userEmail"`
	UserName         *string    `json:"userName"`
	Where            *string    `json:"where"`
	Why              *string    `json:"why"`
}
