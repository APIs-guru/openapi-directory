import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationEnum } from "./destinationenum";
import { LogTypeEnum } from "./logtypeenum";
/**
 * Settings used to configure delivery mode and destination for conversation logs.
**/
export declare class LogSettingsRequest extends SpeakeasyBase {
    destination: DestinationEnum;
    kmsKeyArn?: string;
    logType: LogTypeEnum;
    resourceArn: string;
}
