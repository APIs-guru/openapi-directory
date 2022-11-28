import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationEnum } from "./destinationenum";
import { LogTypeEnum } from "./logtypeenum";
/**
 * The settings for conversation logs.
**/
export declare class LogSettingsResponse extends SpeakeasyBase {
    destination?: DestinationEnum;
    kmsKeyArn?: string;
    logType?: LogTypeEnum;
    resourceArn?: string;
    resourcePrefix?: string;
}
