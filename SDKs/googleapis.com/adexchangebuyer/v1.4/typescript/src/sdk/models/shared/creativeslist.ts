import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Creative } from "./creative";


// CreativesList
/** 
 * The creatives feed lists the active creatives for the Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single creative.
**/
export class CreativesList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Creative })
  items?: Creative[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
