import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicDnsPropertiesMutableChange } from "./publicdnspropertiesmutablechange";



// PublicDnsNamespacePropertiesChange
/** 
 * Updated properties for the public DNS namespace.
**/
export class PublicDnsNamespacePropertiesChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DnsProperties" })
  dnsProperties: PublicDnsPropertiesMutableChange;
}
