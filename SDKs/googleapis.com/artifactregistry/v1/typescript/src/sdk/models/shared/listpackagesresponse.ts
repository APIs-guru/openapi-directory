import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Package } from "./package";


// ListPackagesResponse
/** 
 * The response from listing packages.
**/
export class ListPackagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=packages", elemType: shared.Package })
  packages?: Package[];
}
