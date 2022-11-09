import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SoaChange } from "./soachange";


// PublicDnsPropertiesMutableChange
/** 
 * Updated DNS properties for the public DNS namespace.
**/
export class PublicDnsPropertiesMutableChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=SOA" })
  soa: SoaChange;
}
