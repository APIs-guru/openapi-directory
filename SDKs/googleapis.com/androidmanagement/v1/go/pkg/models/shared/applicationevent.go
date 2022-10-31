package shared

type ApplicationEventEventTypeEnum string

const (
	ApplicationEventEventTypeEnumApplicationEventTypeUnspecified ApplicationEventEventTypeEnum = "APPLICATION_EVENT_TYPE_UNSPECIFIED"
	ApplicationEventEventTypeEnumInstalled                       ApplicationEventEventTypeEnum = "INSTALLED"
	ApplicationEventEventTypeEnumChanged                         ApplicationEventEventTypeEnum = "CHANGED"
	ApplicationEventEventTypeEnumDataCleared                     ApplicationEventEventTypeEnum = "DATA_CLEARED"
	ApplicationEventEventTypeEnumRemoved                         ApplicationEventEventTypeEnum = "REMOVED"
	ApplicationEventEventTypeEnumReplaced                        ApplicationEventEventTypeEnum = "REPLACED"
	ApplicationEventEventTypeEnumRestarted                       ApplicationEventEventTypeEnum = "RESTARTED"
	ApplicationEventEventTypeEnumPinned                          ApplicationEventEventTypeEnum = "PINNED"
	ApplicationEventEventTypeEnumUnpinned                        ApplicationEventEventTypeEnum = "UNPINNED"
)

type ApplicationEvent struct {
	CreateTime *string                        `json:"createTime,omitempty"`
	EventType  *ApplicationEventEventTypeEnum `json:"eventType,omitempty"`
}
