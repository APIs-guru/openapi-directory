import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfileFilterLink } from "./profilefilterlink";



// ProfileFilterLinks
/** 
 * A profile filter link collection lists profile filter links between profiles and filters. Each resource in the collection corresponds to a profile filter link.
**/
export class ProfileFilterLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ProfileFilterLink })
  items?: ProfileFilterLink[];

  @SpeakeasyMetadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextLink" })
  nextLink?: string;

  @SpeakeasyMetadata({ data: "json, name=previousLink" })
  previousLink?: string;

  @SpeakeasyMetadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
