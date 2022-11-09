import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BundleDetails } from "./bundledetails";


// ListBundlesResult
/** 
 *  Result structure contains a list of all available bundles with details. 
**/
export class ListBundlesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundleList", elemType: shared.BundleDetails })
  bundleList?: BundleDetails[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
