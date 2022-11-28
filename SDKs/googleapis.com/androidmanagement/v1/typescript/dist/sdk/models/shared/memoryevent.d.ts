import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MemoryEventEventTypeEnum {
    MemoryEventTypeUnspecified = "MEMORY_EVENT_TYPE_UNSPECIFIED",
    RamMeasured = "RAM_MEASURED",
    InternalStorageMeasured = "INTERNAL_STORAGE_MEASURED",
    ExternalStorageDetected = "EXTERNAL_STORAGE_DETECTED",
    ExternalStorageRemoved = "EXTERNAL_STORAGE_REMOVED",
    ExternalStorageMeasured = "EXTERNAL_STORAGE_MEASURED"
}
/**
 * An event related to memory and storage measurements.
**/
export declare class MemoryEvent extends SpeakeasyBase {
    byteCount?: string;
    createTime?: string;
    eventType?: MemoryEventEventTypeEnum;
}
