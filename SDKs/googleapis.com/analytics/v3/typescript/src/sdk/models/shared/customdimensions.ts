import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomDimension } from "./customdimension";



// CustomDimensions
/** 
 * A custom dimension collection lists Analytics custom dimensions to which the user has access. Each resource in the collection corresponds to a single Analytics custom dimension.
**/
export class CustomDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: CustomDimension })
  items?: CustomDimension[];

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
