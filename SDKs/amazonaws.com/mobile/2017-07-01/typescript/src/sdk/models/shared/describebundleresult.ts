import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BundleDetails } from "./bundledetails";


// DescribeBundleResult
/** 
 *  Result structure contains the details of the bundle. 
**/
export class DescribeBundleResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: BundleDetails;
}
