import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SoaChange } from "./soachange";



// PublicDnsPropertiesMutableChange
/** 
 * Updated DNS properties for the public DNS namespace.
**/
export class PublicDnsPropertiesMutableChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SOA" })
  soa: SoaChange;
}
