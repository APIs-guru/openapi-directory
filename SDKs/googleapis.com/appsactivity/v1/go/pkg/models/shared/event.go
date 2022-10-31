package shared

type EventAdditionalEventTypesEnum string

const (
	EventAdditionalEventTypesEnumComment          EventAdditionalEventTypesEnum = "comment"
	EventAdditionalEventTypesEnumCreate           EventAdditionalEventTypesEnum = "create"
	EventAdditionalEventTypesEnumEdit             EventAdditionalEventTypesEnum = "edit"
	EventAdditionalEventTypesEnumEmptyTrash       EventAdditionalEventTypesEnum = "emptyTrash"
	EventAdditionalEventTypesEnumMove             EventAdditionalEventTypesEnum = "move"
	EventAdditionalEventTypesEnumPermissionChange EventAdditionalEventTypesEnum = "permissionChange"
	EventAdditionalEventTypesEnumRename           EventAdditionalEventTypesEnum = "rename"
	EventAdditionalEventTypesEnumTrash            EventAdditionalEventTypesEnum = "trash"
	EventAdditionalEventTypesEnumUnknown          EventAdditionalEventTypesEnum = "unknown"
	EventAdditionalEventTypesEnumUntrash          EventAdditionalEventTypesEnum = "untrash"
	EventAdditionalEventTypesEnumUpload           EventAdditionalEventTypesEnum = "upload"
)

type EventPrimaryEventTypeEnum string

const (
	EventPrimaryEventTypeEnumComment          EventPrimaryEventTypeEnum = "comment"
	EventPrimaryEventTypeEnumCreate           EventPrimaryEventTypeEnum = "create"
	EventPrimaryEventTypeEnumEdit             EventPrimaryEventTypeEnum = "edit"
	EventPrimaryEventTypeEnumEmptyTrash       EventPrimaryEventTypeEnum = "emptyTrash"
	EventPrimaryEventTypeEnumMove             EventPrimaryEventTypeEnum = "move"
	EventPrimaryEventTypeEnumPermissionChange EventPrimaryEventTypeEnum = "permissionChange"
	EventPrimaryEventTypeEnumRename           EventPrimaryEventTypeEnum = "rename"
	EventPrimaryEventTypeEnumTrash            EventPrimaryEventTypeEnum = "trash"
	EventPrimaryEventTypeEnumUnknown          EventPrimaryEventTypeEnum = "unknown"
	EventPrimaryEventTypeEnumUntrash          EventPrimaryEventTypeEnum = "untrash"
	EventPrimaryEventTypeEnumUpload           EventPrimaryEventTypeEnum = "upload"
)

type Event struct {
	AdditionalEventTypes []EventAdditionalEventTypesEnum `json:"additionalEventTypes,omitempty"`
	EventTimeMillis      *string                         `json:"eventTimeMillis,omitempty"`
	FromUserDeletion     *bool                           `json:"fromUserDeletion,omitempty"`
	Move                 *Move                           `json:"move,omitempty"`
	PermissionChanges    []PermissionChange              `json:"permissionChanges,omitempty"`
	PrimaryEventType     *EventPrimaryEventTypeEnum      `json:"primaryEventType,omitempty"`
	Rename               *Rename                         `json:"rename,omitempty"`
	Target               *Target                         `json:"target,omitempty"`
	User                 *User                           `json:"user,omitempty"`
}
