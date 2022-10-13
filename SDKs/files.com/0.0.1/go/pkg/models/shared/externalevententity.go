package shared

import (
	"time"
)

type ExternalEventEntityEventTypeEnum string

const (
	ExternalEventEntityEventTypeEnumLdapSync         ExternalEventEntityEventTypeEnum = "ldap_sync"
	ExternalEventEntityEventTypeEnumRemoteServerSync ExternalEventEntityEventTypeEnum = "remote_server_sync"
	ExternalEventEntityEventTypeEnumLockout          ExternalEventEntityEventTypeEnum = "lockout"
	ExternalEventEntityEventTypeEnumLdapLogin        ExternalEventEntityEventTypeEnum = "ldap_login"
	ExternalEventEntityEventTypeEnumSamlLogin        ExternalEventEntityEventTypeEnum = "saml_login"
	ExternalEventEntityEventTypeEnumClientLog        ExternalEventEntityEventTypeEnum = "client_log"
	ExternalEventEntityEventTypeEnumPendingWork      ExternalEventEntityEventTypeEnum = "pending_work"
)

type ExternalEventEntityStatusEnum string

const (
	ExternalEventEntityStatusEnumSuccess        ExternalEventEntityStatusEnum = "success"
	ExternalEventEntityStatusEnumError          ExternalEventEntityStatusEnum = "error"
	ExternalEventEntityStatusEnumPartialFailure ExternalEventEntityStatusEnum = "partial_failure"
)

type ExternalEventEntity struct {
	Body             *string                           `json:"body"`
	BodyURL          *string                           `json:"body_url"`
	BytesSynced      *int32                            `json:"bytes_synced"`
	CreatedAt        *time.Time                        `json:"created_at"`
	ErroredFiles     *int32                            `json:"errored_files"`
	EventType        *ExternalEventEntityEventTypeEnum `json:"event_type"`
	FolderBehaviorID *int32                            `json:"folder_behavior_id"`
	ID               *int32                            `json:"id"`
	RemoteServerType *string                           `json:"remote_server_type"`
	Status           *ExternalEventEntityStatusEnum    `json:"status"`
	SuccessfulFiles  *int32                            `json:"successful_files"`
}
