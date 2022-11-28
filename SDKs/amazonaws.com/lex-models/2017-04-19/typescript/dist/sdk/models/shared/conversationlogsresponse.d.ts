import { SpeakeasyBase } from "../../../internal/utils";
import { LogSettingsResponse } from "./logsettingsresponse";
/**
 * Contains information about conversation log settings.
**/
export declare class ConversationLogsResponse extends SpeakeasyBase {
    iamRoleArn?: string;
    logSettings?: LogSettingsResponse[];
}
