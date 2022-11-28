import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrivateDnsPropertiesMutableChange } from "./privatednspropertiesmutablechange";



// PrivateDnsNamespacePropertiesChange
/** 
 * Updated properties for the private DNS namespace.
**/
export class PrivateDnsNamespacePropertiesChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DnsProperties" })
  dnsProperties: PrivateDnsPropertiesMutableChange;
}
