import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DnsRecord } from "./dnsrecord";
import { RoutingPolicyEnum } from "./routingpolicyenum";


// DnsConfig
/** 
 * A complex type that contains information about the Amazon Route 53 DNS records that you want Cloud Map to create when you register an instance.
**/
export class DnsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=DnsRecords", elemType: shared.DnsRecord })
  dnsRecords: DnsRecord[];

  @Metadata({ data: "json, name=NamespaceId" })
  namespaceId?: string;

  @Metadata({ data: "json, name=RoutingPolicy" })
  routingPolicy?: RoutingPolicyEnum;
}
