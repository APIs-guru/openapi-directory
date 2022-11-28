import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicDnsPropertiesMutable } from "./publicdnspropertiesmutable";



// PublicDnsNamespaceProperties
/** 
 * DNS properties for the public DNS namespace.
**/
export class PublicDnsNamespaceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DnsProperties" })
  dnsProperties: PublicDnsPropertiesMutable;
}
