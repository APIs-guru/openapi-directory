import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdSource } from "./adsource";


// ListAdSourcesResponse
/** 
 * Response for the ListAdSourcesRequest.
**/
export class ListAdSourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=adSources", elemType: shared.AdSource })
  adSources?: AdSource[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
