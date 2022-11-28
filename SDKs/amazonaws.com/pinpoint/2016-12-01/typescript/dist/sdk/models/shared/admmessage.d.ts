import { SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
/**
 * Specifies the settings for a one-time message that's sent directly to an endpoint through the ADM (Amazon Device Messaging) channel.
**/
export declare class AdmMessage extends SpeakeasyBase {
    action?: ActionEnum;
    body?: string;
    consolidationKey?: string;
    data?: Map<string, string>;
    expiresAfter?: string;
    iconReference?: string;
    imageIconUrl?: string;
    imageUrl?: string;
    md5?: string;
    rawContent?: string;
    silentPush?: boolean;
    smallImageIconUrl?: string;
    sound?: string;
    substitutions?: Map<string, string[]>;
    title?: string;
    url?: string;
}
