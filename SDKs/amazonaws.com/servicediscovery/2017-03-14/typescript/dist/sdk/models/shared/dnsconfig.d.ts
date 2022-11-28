import { SpeakeasyBase } from "../../../internal/utils";
import { DnsRecord } from "./dnsrecord";
import { RoutingPolicyEnum } from "./routingpolicyenum";
/**
 * A complex type that contains information about the Amazon Route 53 DNS records that you want Cloud Map to create when you register an instance.
**/
export declare class DnsConfig extends SpeakeasyBase {
    dnsRecords: DnsRecord[];
    namespaceId?: string;
    routingPolicy?: RoutingPolicyEnum;
}
