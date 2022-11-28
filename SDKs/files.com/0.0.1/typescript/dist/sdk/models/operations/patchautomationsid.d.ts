import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchAutomationsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum PatchAutomationsIdRequestBodyAutomationEnum {
    CreateFolder = "create_folder",
    RequestFile = "request_file",
    RequestMove = "request_move",
    CopyNewestFile = "copy_newest_file",
    DeleteFile = "delete_file",
    CopyFile = "copy_file",
    MoveFile = "move_file"
}
export declare enum PatchAutomationsIdRequestBodyTriggerEnum {
    Realtime = "realtime",
    Daily = "daily",
    CustomSchedule = "custom_schedule",
    Webhook = "webhook",
    Email = "email",
    Action = "action"
}
export declare class PatchAutomationsIdRequestBody extends SpeakeasyBase {
    automation: PatchAutomationsIdRequestBodyAutomationEnum;
    destination?: string;
    destinationReplaceFrom?: string;
    destinationReplaceTo?: string;
    destinations?: string[];
    groupIds?: string;
    interval?: string;
    path?: string;
    schedule?: Map<string, any>;
    source?: string;
    trigger?: PatchAutomationsIdRequestBodyTriggerEnum;
    triggerActionPath?: string;
    triggerActions?: string[];
    userIds?: string;
    value?: Map<string, any>;
}
export declare class PatchAutomationsIdRequest extends SpeakeasyBase {
    pathParams: PatchAutomationsIdPathParams;
    request: PatchAutomationsIdRequestBody;
}
export declare class PatchAutomationsIdResponse extends SpeakeasyBase {
    automationEntity?: shared.AutomationEntity;
    contentType: string;
    statusCode: number;
}
