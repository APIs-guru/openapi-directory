import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityUserLink } from "./entityuserlink";



// EntityUserLinks
/** 
 * An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a single link.
**/
export class EntityUserLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: EntityUserLink })
  items?: EntityUserLink[];

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
}
