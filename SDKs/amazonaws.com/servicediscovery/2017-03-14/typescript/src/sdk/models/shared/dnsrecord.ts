import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordTypeEnum } from "./recordtypeenum";



// DnsRecord
/** 
 * A complex type that contains information about the Route 53 DNS records that you want Cloud Map to create when you register an instance.
**/
export class DnsRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TTL" })
  ttl: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: RecordTypeEnum;
}
