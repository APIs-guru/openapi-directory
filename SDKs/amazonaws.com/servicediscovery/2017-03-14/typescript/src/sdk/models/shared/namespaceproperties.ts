import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DnsProperties } from "./dnsproperties";
import { HttpProperties } from "./httpproperties";


// NamespaceProperties
/** 
 * A complex type that contains information that's specific to the namespace type.
**/
export class NamespaceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=DnsProperties" })
  dnsProperties?: DnsProperties;

  @Metadata({ data: "json, name=HttpProperties" })
  httpProperties?: HttpProperties;
}
