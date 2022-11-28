import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BundleDetails } from "./bundledetails";



// ListBundlesResult
/** 
 *  Result structure contains a list of all available bundles with details. 
**/
export class ListBundlesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleList", elemType: BundleDetails })
  bundleList?: BundleDetails[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
