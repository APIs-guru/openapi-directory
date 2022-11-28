import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Creative } from "./creative";



// CreativesList
/** 
 * The creatives feed lists the active creatives for the Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single creative.
**/
export class CreativesList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Creative })
  items?: Creative[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
