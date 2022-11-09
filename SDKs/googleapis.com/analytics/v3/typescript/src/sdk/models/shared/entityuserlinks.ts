import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityUserLink } from "./entityuserlink";


// EntityUserLinks
/** 
 * An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a single link.
**/
export class EntityUserLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.EntityUserLink })
  items?: EntityUserLink[];

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
