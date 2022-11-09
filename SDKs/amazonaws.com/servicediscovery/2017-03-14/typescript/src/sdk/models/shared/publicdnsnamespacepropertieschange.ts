import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PublicDnsPropertiesMutableChange } from "./publicdnspropertiesmutablechange";


// PublicDnsNamespacePropertiesChange
/** 
 * Updated properties for the public DNS namespace.
**/
export class PublicDnsNamespacePropertiesChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=DnsProperties" })
  dnsProperties: PublicDnsPropertiesMutableChange;
}
