import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemarketingAudience } from "./remarketingaudience";



// RemarketingAudiences
/** 
 * A remarketing audience collection lists Analytics remarketing audiences to which the user has access. Each resource in the collection corresponds to a single Analytics remarketing audience.
**/
export class RemarketingAudiences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: RemarketingAudience })
  items?: RemarketingAudience[];

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
