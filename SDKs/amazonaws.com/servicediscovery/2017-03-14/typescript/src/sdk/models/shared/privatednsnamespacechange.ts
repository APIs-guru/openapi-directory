import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrivateDnsNamespacePropertiesChange } from "./privatednsnamespacepropertieschange";



// PrivateDnsNamespaceChange
/** 
 * Updated properties for the private DNS namespace.
**/
export class PrivateDnsNamespaceChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Properties" })
  properties?: PrivateDnsNamespacePropertiesChange;
}
