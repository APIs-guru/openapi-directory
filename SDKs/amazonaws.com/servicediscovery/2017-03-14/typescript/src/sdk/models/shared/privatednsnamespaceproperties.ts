import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrivateDnsPropertiesMutable } from "./privatednspropertiesmutable";



// PrivateDnsNamespaceProperties
/** 
 * DNS properties for the private DNS namespace.
**/
export class PrivateDnsNamespaceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DnsProperties" })
  dnsProperties: PrivateDnsPropertiesMutable;
}
