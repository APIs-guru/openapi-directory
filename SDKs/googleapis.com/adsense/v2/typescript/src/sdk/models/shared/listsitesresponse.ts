import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Site } from "./site";



// ListSitesResponse
/** 
 * Response definition for the sites list rpc.
**/
export class ListSitesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sites", elemType: Site })
  sites?: Site[];
}
