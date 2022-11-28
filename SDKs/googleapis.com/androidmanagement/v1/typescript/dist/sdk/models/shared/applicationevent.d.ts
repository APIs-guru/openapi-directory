import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApplicationEventEventTypeEnum {
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
/**
 * An app-related event.
**/
export declare class ApplicationEvent extends SpeakeasyBase {
    createTime?: string;
    eventType?: ApplicationEventEventTypeEnum;
}
