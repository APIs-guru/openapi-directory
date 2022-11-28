package shared

type MemoryEventEventTypeEnum string

const (
	MemoryEventEventTypeEnumMemoryEventTypeUnspecified MemoryEventEventTypeEnum = "MEMORY_EVENT_TYPE_UNSPECIFIED"
	MemoryEventEventTypeEnumRAMMeasured                MemoryEventEventTypeEnum = "RAM_MEASURED"
	MemoryEventEventTypeEnumInternalStorageMeasured    MemoryEventEventTypeEnum = "INTERNAL_STORAGE_MEASURED"
	MemoryEventEventTypeEnumExternalStorageDetected    MemoryEventEventTypeEnum = "EXTERNAL_STORAGE_DETECTED"
	MemoryEventEventTypeEnumExternalStorageRemoved     MemoryEventEventTypeEnum = "EXTERNAL_STORAGE_REMOVED"
	MemoryEventEventTypeEnumExternalStorageMeasured    MemoryEventEventTypeEnum = "EXTERNAL_STORAGE_MEASURED"
)

// MemoryEvent
// An event related to memory and storage measurements.
type MemoryEvent struct {
	ByteCount  *string                   `json:"byteCount,omitempty"`
	CreateTime *string                   `json:"createTime,omitempty"`
	EventType  *MemoryEventEventTypeEnum `json:"eventType,omitempty"`
}
