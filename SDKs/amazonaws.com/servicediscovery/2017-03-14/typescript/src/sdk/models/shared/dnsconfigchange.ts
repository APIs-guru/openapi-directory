import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DnsRecord } from "./dnsrecord";


// DnsConfigChange
/** 
 * A complex type that contains information about changes to the Route 53 DNS records that Cloud Map creates when you register an instance.
**/
export class DnsConfigChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=DnsRecords", elemType: shared.DnsRecord })
  dnsRecords: DnsRecord[];
}
