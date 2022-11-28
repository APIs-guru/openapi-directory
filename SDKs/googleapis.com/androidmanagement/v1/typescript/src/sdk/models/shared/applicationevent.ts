import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApplicationEventEventTypeEnum {
    ApplicationEventTypeUnspecified = "APPLICATION_EVENT_TYPE_UNSPECIFIED",
    Installed = "INSTALLED",
    Changed = "CHANGED",
    DataCleared = "DATA_CLEARED",
    Removed = "REMOVED",
    Replaced = "REPLACED",
    Restarted = "RESTARTED",
    Pinned = "PINNED",
    Unpinned = "UNPINNED"
}


// ApplicationEvent
/** 
 * An app-related event.
**/
export class ApplicationEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: ApplicationEventEventTypeEnum;
}
