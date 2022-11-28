import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Soa } from "./soa";



// PrivateDnsPropertiesMutable
/** 
 * DNS properties for the private DNS namespace.
**/
export class PrivateDnsPropertiesMutable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SOA" })
  soa: Soa;
}
