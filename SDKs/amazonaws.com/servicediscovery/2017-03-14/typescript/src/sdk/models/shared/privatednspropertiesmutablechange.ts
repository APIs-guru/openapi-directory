import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SoaChange } from "./soachange";



// PrivateDnsPropertiesMutableChange
/** 
 * Updated DNS properties for the private DNS namespace.
**/
export class PrivateDnsPropertiesMutableChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SOA" })
  soa: SoaChange;
}
