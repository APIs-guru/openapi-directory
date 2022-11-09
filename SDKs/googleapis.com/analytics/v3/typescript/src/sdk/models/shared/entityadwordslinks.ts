import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityAdWordsLink } from "./entityadwordslink";


// EntityAdWordsLinks
/** 
 * An entity Google Ads link collection provides a list of GA-Google Ads links Each resource in this collection corresponds to a single link.
**/
export class EntityAdWordsLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.EntityAdWordsLink })
  items?: EntityAdWordsLink[];

  @Metadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextLink" })
  nextLink?: string;

  @Metadata({ data: "json, name=previousLink" })
  previousLink?: string;

  @Metadata({ data: "json, name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
