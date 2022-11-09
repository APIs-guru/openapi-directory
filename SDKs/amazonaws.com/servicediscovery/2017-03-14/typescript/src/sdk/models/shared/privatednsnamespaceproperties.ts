import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrivateDnsPropertiesMutable } from "./privatednspropertiesmutable";


// PrivateDnsNamespaceProperties
/** 
 * DNS properties for the private DNS namespace.
**/
export class PrivateDnsNamespaceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=DnsProperties" })
  dnsProperties: PrivateDnsPropertiesMutable;
}
