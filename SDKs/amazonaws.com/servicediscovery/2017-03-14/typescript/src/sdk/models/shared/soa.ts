import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Soa
/** 
 * Start of Authority (SOA) properties for a public or private DNS namespace.
**/
export class Soa extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TTL" })
  ttl: number;
}
