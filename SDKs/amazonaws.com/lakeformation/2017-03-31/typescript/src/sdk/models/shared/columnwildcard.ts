import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ColumnWildcard
/** 
 * A wildcard object, consisting of an optional list of excluded column names or indexes.
**/
export class ColumnWildcard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExcludedColumnNames" })
  excludedColumnNames?: string[];
}
