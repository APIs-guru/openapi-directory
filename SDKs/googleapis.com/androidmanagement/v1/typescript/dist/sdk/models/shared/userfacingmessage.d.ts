import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a user-facing message with locale info. The maximum message length is 4096 characters.
**/
export declare class UserFacingMessage extends SpeakeasyBase {
    defaultMessage?: string;
    localizedMessages?: Map<string, string>;
}
