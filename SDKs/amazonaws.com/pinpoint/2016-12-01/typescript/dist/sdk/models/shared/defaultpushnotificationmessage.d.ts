import { SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
/**
 * Specifies the default settings and content for a push notification that's sent directly to an endpoint.
**/
export declare class DefaultPushNotificationMessage extends SpeakeasyBase {
    action?: ActionEnum;
    body?: string;
    data?: Map<string, string>;
    silentPush?: boolean;
    substitutions?: Map<string, string[]>;
    title?: string;
    url?: string;
}
