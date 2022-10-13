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
	AdditionalEventTypes []EventAdditionalEventTypesEnum `json:"additionalEventTypes"`
	EventTimeMillis      *string                         `json:"eventTimeMillis"`
	FromUserDeletion     *bool                           `json:"fromUserDeletion"`
	Move                 *Move                           `json:"move"`
	PermissionChanges    []PermissionChange              `json:"permissionChanges"`
	PrimaryEventType     *EventPrimaryEventTypeEnum      `json:"primaryEventType"`
	Rename               *Rename                         `json:"rename"`
	Target               *Target                         `json:"target"`
	User                 *User                           `json:"user"`
}
