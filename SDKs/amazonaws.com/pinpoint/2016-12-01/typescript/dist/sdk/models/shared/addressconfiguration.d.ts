import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelTypeEnum } from "./channeltypeenum";
/**
 * Specifies address-based configuration settings for a message that's sent directly to an endpoint.
**/
export declare class AddressConfiguration extends SpeakeasyBase {
    bodyOverride?: string;
    channelType?: ChannelTypeEnum;
    context?: Map<string, string>;
    rawContent?: string;
    substitutions?: Map<string, string[]>;
    titleOverride?: string;
}
