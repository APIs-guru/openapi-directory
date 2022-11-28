import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bundle } from "./bundle";



// BundlesListResponse
/** 
 * Response listing all app bundles.
**/
export class BundlesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundles", elemType: Bundle })
  bundles?: Bundle[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
