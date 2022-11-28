import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsRecord } from "./dnsrecord";



// DnsConfigChange
/** 
 * A complex type that contains information about changes to the Route 53 DNS records that Cloud Map creates when you register an instance.
**/
export class DnsConfigChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DnsRecords", elemType: DnsRecord })
  dnsRecords: DnsRecord[];
}
