import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrivateDnsNamespacePropertiesChange } from "./privatednsnamespacepropertieschange";


// PrivateDnsNamespaceChange
/** 
 * Updated properties for the private DNS namespace.
**/
export class PrivateDnsNamespaceChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Properties" })
  properties?: PrivateDnsNamespacePropertiesChange;
}
