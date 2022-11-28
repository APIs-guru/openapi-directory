import { SpeakeasyBase } from "../../../internal/utils";
import { DedicatedIp } from "./dedicatedip";
/**
 * Information about the dedicated IP addresses that are associated with your AWS account.
**/
export declare class GetDedicatedIpsResponse extends SpeakeasyBase {
    dedicatedIps?: DedicatedIp[];
    nextToken?: string;
}
