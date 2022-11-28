import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that contains information about the amount of email that was delivered to recipients.
**/
export declare class VolumeStatistics extends SpeakeasyBase {
    inboxRawCount?: number;
    projectedInbox?: number;
    projectedSpam?: number;
    spamRawCount?: number;
}
