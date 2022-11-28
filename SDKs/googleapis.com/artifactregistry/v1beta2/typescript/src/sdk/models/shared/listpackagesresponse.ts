import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Package } from "./package";



// ListPackagesResponse
/** 
 * The response from listing packages.
**/
export class ListPackagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=packages", elemType: Package })
  packages?: Package[];
}
