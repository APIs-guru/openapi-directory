import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Information about the contact channel that Incident Manager uses to engage the contact.
**/
export declare class ChannelTargetInfo extends SpeakeasyBase {
    contactChannelId: string;
    retryIntervalInMinutes?: number;
}
