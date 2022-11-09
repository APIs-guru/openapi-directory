import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListTagOptionsFilters
/** 
 * Filters to use when listing TagOptions.
**/
export class ListTagOptionsFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=Active" })
  active?: boolean;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
