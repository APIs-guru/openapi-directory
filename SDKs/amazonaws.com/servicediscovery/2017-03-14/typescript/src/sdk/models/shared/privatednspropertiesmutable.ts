import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Soa } from "./soa";


// PrivateDnsPropertiesMutable
/** 
 * DNS properties for the private DNS namespace.
**/
export class PrivateDnsPropertiesMutable extends SpeakeasyBase {
  @Metadata({ data: "json, name=SOA" })
  soa: Soa;
}
