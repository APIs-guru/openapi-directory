import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdSource } from "./adsource";



// ListAdSourcesResponse
/** 
 * Response for the ListAdSourcesRequest.
**/
export class ListAdSourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adSources", elemType: AdSource })
  adSources?: AdSource[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
