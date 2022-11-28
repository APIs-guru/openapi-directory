import { SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";
/**
 * Specifies information about an event that reports data to Amazon Pinpoint.
**/
export declare class Event extends SpeakeasyBase {
    appPackageName?: string;
    appTitle?: string;
    appVersionCode?: string;
    attributes?: Map<string, string>;
    clientSdkVersion?: string;
    eventType: string;
    metrics?: Map<string, number>;
    sdkName?: string;
    session?: Session;
    timestamp: string;
}
