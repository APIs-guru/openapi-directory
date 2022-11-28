import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Soa } from "./soa";



// PublicDnsPropertiesMutable
/** 
 * DNS properties for the public DNS namespace.
**/
export class PublicDnsPropertiesMutable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SOA" })
  soa: Soa;
}
