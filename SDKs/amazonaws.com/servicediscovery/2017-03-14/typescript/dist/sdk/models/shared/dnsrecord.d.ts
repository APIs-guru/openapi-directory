import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecordTypeEnum } from "./recordtypeenum";
/**
 * A complex type that contains information about the Route 53 DNS records that you want Cloud Map to create when you register an instance.
**/
export declare class DnsRecord extends SpeakeasyBase {
    ttl: number;
    type: RecordTypeEnum;
}
