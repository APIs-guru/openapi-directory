import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Creative } from "./creative";


// ListCreativesResponse
/** 
 * A response for listing creatives.
**/
export class ListCreativesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=creatives", elemType: shared.Creative })
  creatives?: Creative[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
