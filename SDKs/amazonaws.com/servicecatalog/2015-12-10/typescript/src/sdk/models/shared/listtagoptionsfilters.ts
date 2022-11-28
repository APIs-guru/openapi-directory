import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListTagOptionsFilters
/** 
 * Filters to use when listing TagOptions.
**/
export class ListTagOptionsFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
