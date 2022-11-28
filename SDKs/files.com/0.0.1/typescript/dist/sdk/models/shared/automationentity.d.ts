import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AutomationEntityAutomationEnum {
    CreateFolder = "create_folder",
    RequestFile = "request_file",
    RequestMove = "request_move",
    CopyNewestFile = "copy_newest_file",
    DeleteFile = "delete_file",
    CopyFile = "copy_file",
    MoveFile = "move_file"
}
export declare enum AutomationEntityTriggerEnum {
    Realtime = "realtime",
    Daily = "daily",
    CustomSchedule = "custom_schedule",
    Webhook = "webhook",
    Email = "email",
    Action = "action"
}
/**
 * List Automations
**/
export declare class AutomationEntity extends SpeakeasyBase {
    automation?: AutomationEntityAutomationEnum;
    destinationReplaceFrom?: string;
    destinationReplaceTo?: string;
    destinations?: string;
    groupIds?: number[];
    id?: number;
    interval?: string;
    nextProcessOn?: string;
    path?: string;
    schedule?: Map<string, any>;
    source?: string;
    trigger?: AutomationEntityTriggerEnum;
    triggerActionPath?: string;
    triggerActions?: string;
    userId?: number;
    userIds?: number[];
    value?: Map<string, any>;
    webhookUrl?: string;
}
