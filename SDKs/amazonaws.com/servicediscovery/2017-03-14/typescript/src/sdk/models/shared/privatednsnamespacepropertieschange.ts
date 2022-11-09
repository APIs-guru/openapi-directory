import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrivateDnsPropertiesMutableChange } from "./privatednspropertiesmutablechange";


// PrivateDnsNamespacePropertiesChange
/** 
 * Updated properties for the private DNS namespace.
**/
export class PrivateDnsNamespacePropertiesChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=DnsProperties" })
  dnsProperties: PrivateDnsPropertiesMutableChange;
}
