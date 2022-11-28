import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Webproperty } from "./webproperty";



// Webproperties
/** 
 * A web property collection lists Analytics web properties to which the user has access. Each resource in the collection corresponds to a single Analytics web property.
**/
export class Webproperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Webproperty })
  items?: Webproperty[];

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
