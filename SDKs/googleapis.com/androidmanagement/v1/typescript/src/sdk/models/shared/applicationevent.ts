import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ApplicationEventEventTypeEnum {
    ApplicationEventTypeUnspecified = "APPLICATION_EVENT_TYPE_UNSPECIFIED"
,    Installed = "INSTALLED"
,    Changed = "CHANGED"
,    DataCleared = "DATA_CLEARED"
,    Removed = "REMOVED"
,    Replaced = "REPLACED"
,    Restarted = "RESTARTED"
,    Pinned = "PINNED"
,    Unpinned = "UNPINNED"
}


// ApplicationEvent
/** 
 * An app-related event.
**/
export class ApplicationEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=eventType" })
  eventType?: ApplicationEventEventTypeEnum;
}
