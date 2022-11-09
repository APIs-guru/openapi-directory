import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SoaChange } from "./soachange";


// PrivateDnsPropertiesMutableChange
/** 
 * Updated DNS properties for the private DNS namespace.
**/
export class PrivateDnsPropertiesMutableChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=SOA" })
  soa: SoaChange;
}
