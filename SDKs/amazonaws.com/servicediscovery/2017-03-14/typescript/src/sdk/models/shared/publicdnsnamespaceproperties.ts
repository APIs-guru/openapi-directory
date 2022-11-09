import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PublicDnsPropertiesMutable } from "./publicdnspropertiesmutable";


// PublicDnsNamespaceProperties
/** 
 * DNS properties for the public DNS namespace.
**/
export class PublicDnsNamespaceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=DnsProperties" })
  dnsProperties: PublicDnsPropertiesMutable;
}
