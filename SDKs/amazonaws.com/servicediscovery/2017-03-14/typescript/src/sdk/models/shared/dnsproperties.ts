import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Soa } from "./soa";


// DnsProperties
/** 
 * A complex type that contains the ID for the Route 53 hosted zone that Cloud Map creates when you create a namespace.
**/
export class DnsProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=HostedZoneId" })
  hostedZoneId?: string;

  @Metadata({ data: "json, name=SOA" })
  soa?: Soa;
}
