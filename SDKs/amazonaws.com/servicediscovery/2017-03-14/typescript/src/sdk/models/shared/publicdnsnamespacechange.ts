import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PublicDnsNamespacePropertiesChange } from "./publicdnsnamespacepropertieschange";


// PublicDnsNamespaceChange
/** 
 * Updated properties for the public DNS namespace.
**/
export class PublicDnsNamespaceChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Properties" })
  properties?: PublicDnsNamespacePropertiesChange;
}
