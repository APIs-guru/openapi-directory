import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicDnsNamespacePropertiesChange } from "./publicdnsnamespacepropertieschange";



// PublicDnsNamespaceChange
/** 
 * Updated properties for the public DNS namespace.
**/
export class PublicDnsNamespaceChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Properties" })
  properties?: PublicDnsNamespacePropertiesChange;
}
