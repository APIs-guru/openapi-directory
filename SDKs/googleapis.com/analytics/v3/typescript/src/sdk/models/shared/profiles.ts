import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Profile } from "./profile";



// Profiles
/** 
 * A view (profile) collection lists Analytics views (profiles) to which the user has access. Each resource in the collection corresponds to a single Analytics view (profile).
**/
export class Profiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Profile })
  items?: Profile[];

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
