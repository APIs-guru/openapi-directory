import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Package } from "./package";
/**
 * The response from listing packages.
**/
export declare class ListPackagesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    packages?: Package[];
}
