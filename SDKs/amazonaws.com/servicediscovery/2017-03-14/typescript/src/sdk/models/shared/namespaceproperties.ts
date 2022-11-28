import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsProperties } from "./dnsproperties";
import { HttpProperties } from "./httpproperties";



// NamespaceProperties
/** 
 * A complex type that contains information that's specific to the namespace type.
**/
export class NamespaceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DnsProperties" })
  dnsProperties?: DnsProperties;

  @SpeakeasyMetadata({ data: "json, name=HttpProperties" })
  httpProperties?: HttpProperties;
}
