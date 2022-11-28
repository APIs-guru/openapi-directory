import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostAutomationsRequestBodyAutomationEnum {
    CreateFolder = "create_folder",
    RequestFile = "request_file",
    RequestMove = "request_move",
    CopyNewestFile = "copy_newest_file",
    DeleteFile = "delete_file",
    CopyFile = "copy_file",
    MoveFile = "move_file"
}
export declare enum PostAutomationsRequestBodyTriggerEnum {
    Realtime = "realtime",
    Daily = "daily",
    CustomSchedule = "custom_schedule",
    Webhook = "webhook",
    Email = "email",
    Action = "action"
}
export declare class PostAutomationsRequestBody extends SpeakeasyBase {
    automation: PostAutomationsRequestBodyAutomationEnum;
    destination?: string;
    destinationReplaceFrom?: string;
    destinationReplaceTo?: string;
    destinations?: string[];
    groupIds?: string;
    interval?: string;
    path?: string;
    schedule?: Map<string, any>;
    source?: string;
    trigger?: PostAutomationsRequestBodyTriggerEnum;
    triggerActionPath?: string;
    triggerActions?: string[];
    userIds?: string;
    value?: Map<string, any>;
}
export declare class PostAutomationsRequest extends SpeakeasyBase {
    request: PostAutomationsRequestBody;
}
export declare class PostAutomationsResponse extends SpeakeasyBase {
    automationEntity?: shared.AutomationEntity;
    contentType: string;
    statusCode: number;
}
