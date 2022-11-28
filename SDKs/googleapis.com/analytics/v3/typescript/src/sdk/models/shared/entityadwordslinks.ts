import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityAdWordsLink } from "./entityadwordslink";



// EntityAdWordsLinks
/** 
 * An entity Google Ads link collection provides a list of GA-Google Ads links Each resource in this collection corresponds to a single link.
**/
export class EntityAdWordsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: EntityAdWordsLink })
  items?: EntityAdWordsLink[];

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
