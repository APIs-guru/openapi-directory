import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpNamespaceChange
/** 
 * Updated properties for the HTTP namespace.
**/
export class HttpNamespaceChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;
}
