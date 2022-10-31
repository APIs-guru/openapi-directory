package shared

import (
	"time"
)

type AuditLogItemModel struct {
	ActionTarget     *string    `json:"actionTarget,omitempty"`
	AuditLogDateTime *time.Time `json:"auditLogDateTime,omitempty"`
	AuditLogID       *int64     `json:"auditLogId,omitempty"`
	AuditLogType     *string    `json:"auditLogType,omitempty"`
	Details          *string    `json:"details,omitempty"`
	UserEmail        *string    `json:"userEmail,omitempty"`
	UserName         *string    `json:"userName,omitempty"`
	Where            *string    `json:"where,omitempty"`
	Why              *string    `json:"why,omitempty"`
}
