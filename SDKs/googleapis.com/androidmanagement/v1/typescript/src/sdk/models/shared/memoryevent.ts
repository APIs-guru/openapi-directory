import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MemoryEventEventTypeEnum {
    MemoryEventTypeUnspecified = "MEMORY_EVENT_TYPE_UNSPECIFIED"
,    RamMeasured = "RAM_MEASURED"
,    InternalStorageMeasured = "INTERNAL_STORAGE_MEASURED"
,    ExternalStorageDetected = "EXTERNAL_STORAGE_DETECTED"
,    ExternalStorageRemoved = "EXTERNAL_STORAGE_REMOVED"
,    ExternalStorageMeasured = "EXTERNAL_STORAGE_MEASURED"
}


// MemoryEvent
/** 
 * An event related to memory and storage measurements.
**/
export class MemoryEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=byteCount" })
  byteCount?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=eventType" })
  eventType?: MemoryEventEventTypeEnum;
}
