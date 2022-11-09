import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Site } from "./site";


// ListSitesResponse
/** 
 * Response definition for the sites list rpc.
**/
export class ListSitesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=sites", elemType: shared.Site })
  sites?: Site[];
}
