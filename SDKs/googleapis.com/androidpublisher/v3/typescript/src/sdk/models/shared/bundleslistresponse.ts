import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Bundle } from "./bundle";


// BundlesListResponse
/** 
 * Response listing all app bundles.
**/
export class BundlesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundles", elemType: shared.Bundle })
  bundles?: Bundle[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
