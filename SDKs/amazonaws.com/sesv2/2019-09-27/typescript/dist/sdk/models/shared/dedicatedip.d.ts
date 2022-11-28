import { SpeakeasyBase } from "../../../internal/utils";
import { WarmupStatusEnum } from "./warmupstatusenum";
/**
 * <p>Contains information about a dedicated IP address that is associated with your Amazon SES account.</p> <p>To learn more about requesting dedicated IP addresses, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dedicated-ip-case.html">Requesting and Relinquishing Dedicated IP Addresses</a> in the <i>Amazon SES Developer Guide</i>.</p>
**/
export declare class DedicatedIp extends SpeakeasyBase {
    ip: string;
    poolName?: string;
    warmupPercentage: number;
    warmupStatus: WarmupStatusEnum;
}
