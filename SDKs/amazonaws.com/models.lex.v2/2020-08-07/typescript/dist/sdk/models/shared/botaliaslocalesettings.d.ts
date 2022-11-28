import { SpeakeasyBase } from "../../../internal/utils";
import { CodeHookSpecification } from "./codehookspecification";
/**
 * Specifies settings that are unique to a locale. For example, you can use different Lambda function depending on the bot's locale.
**/
export declare class BotAliasLocaleSettings extends SpeakeasyBase {
    codeHookSpecification?: CodeHookSpecification;
    enabled: boolean;
}
