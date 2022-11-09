import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Soa } from "./soa";


// PublicDnsPropertiesMutable
/** 
 * DNS properties for the public DNS namespace.
**/
export class PublicDnsPropertiesMutable extends SpeakeasyBase {
  @Metadata({ data: "json, name=SOA" })
  soa: Soa;
}
