import { SpeakeasyBase } from "../../../internal/utils";
import { SendQuota } from "./sendquota";
/**
 * A list of details about the email-sending capabilities of your Amazon Pinpoint account in the current AWS Region.
**/
export declare class GetAccountResponse extends SpeakeasyBase {
    dedicatedIpAutoWarmupEnabled?: boolean;
    enforcementStatus?: string;
    productionAccessEnabled?: boolean;
    sendQuota?: SendQuota;
    sendingEnabled?: boolean;
}
