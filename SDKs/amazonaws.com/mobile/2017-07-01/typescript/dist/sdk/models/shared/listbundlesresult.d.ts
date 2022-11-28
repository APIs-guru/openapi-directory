import { SpeakeasyBase } from "../../../internal/utils";
import { BundleDetails } from "./bundledetails";
/**
 *  Result structure contains a list of all available bundles with details.
**/
export declare class ListBundlesResult extends SpeakeasyBase {
    bundleList?: BundleDetails[];
    nextToken?: string;
}
