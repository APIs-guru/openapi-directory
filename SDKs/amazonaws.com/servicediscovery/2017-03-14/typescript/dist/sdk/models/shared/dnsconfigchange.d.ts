import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DnsRecord } from "./dnsrecord";
/**
 * A complex type that contains information about changes to the Route 53 DNS records that Cloud Map creates when you register an instance.
**/
export declare class DnsConfigChange extends SpeakeasyBase {
    dnsRecords: DnsRecord[];
}
