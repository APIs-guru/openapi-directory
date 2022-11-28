import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BundleDetails } from "./bundledetails";



// DescribeBundleResult
/** 
 *  Result structure contains the details of the bundle. 
**/
export class DescribeBundleResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: BundleDetails;
}
