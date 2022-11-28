import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsRecord } from "./dnsrecord";
import { RoutingPolicyEnum } from "./routingpolicyenum";



// DnsConfig
/** 
 * A complex type that contains information about the Amazon Route 53 DNS records that you want Cloud Map to create when you register an instance.
**/
export class DnsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DnsRecords", elemType: DnsRecord })
  dnsRecords: DnsRecord[];

  @SpeakeasyMetadata({ data: "json, name=NamespaceId" })
  namespaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=RoutingPolicy" })
  routingPolicy?: RoutingPolicyEnum;
}
