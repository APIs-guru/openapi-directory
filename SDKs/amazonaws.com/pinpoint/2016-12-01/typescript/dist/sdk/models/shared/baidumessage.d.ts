import { SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
/**
 * Specifies the settings for a one-time message that's sent directly to an endpoint through the Baidu (Baidu Cloud Push) channel.
**/
export declare class BaiduMessage extends SpeakeasyBase {
    action?: ActionEnum;
    body?: string;
    data?: Map<string, string>;
    iconReference?: string;
    imageIconUrl?: string;
    imageUrl?: string;
    rawContent?: string;
    silentPush?: boolean;
    smallImageIconUrl?: string;
    sound?: string;
    substitutions?: Map<string, string[]>;
    timeToLive?: number;
    title?: string;
    url?: string;
}
