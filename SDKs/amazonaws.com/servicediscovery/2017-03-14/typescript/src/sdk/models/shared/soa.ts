import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Soa
/** 
 * Start of Authority (SOA) properties for a public or private DNS namespace.
**/
export class Soa extends SpeakeasyBase {
  @Metadata({ data: "json, name=TTL" })
  ttl: number;
}
