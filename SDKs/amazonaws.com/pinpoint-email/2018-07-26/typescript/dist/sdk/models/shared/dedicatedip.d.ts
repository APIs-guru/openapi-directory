import { SpeakeasyBase } from "../../../internal/utils";
import { WarmupStatusEnum } from "./warmupstatusenum";
/**
 * <p>Contains information about a dedicated IP address that is associated with your Amazon Pinpoint account.</p> <p/>
**/
export declare class DedicatedIp extends SpeakeasyBase {
    ip: string;
    poolName?: string;
    warmupPercentage: number;
    warmupStatus: WarmupStatusEnum;
}
