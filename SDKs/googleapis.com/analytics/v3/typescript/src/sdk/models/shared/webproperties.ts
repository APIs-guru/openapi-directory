import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Webproperty } from "./webproperty";


// Webproperties
/** 
 * A web property collection lists Analytics web properties to which the user has access. Each resource in the collection corresponds to a single Analytics web property.
**/
export class Webproperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Webproperty })
  items?: Webproperty[];

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

  @Metadata({ data: "json, name=username" })
  username?: string;
}
