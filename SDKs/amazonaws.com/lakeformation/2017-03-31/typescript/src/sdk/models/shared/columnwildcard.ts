import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ColumnWildcard
/** 
 * A wildcard object, consisting of an optional list of excluded column names or indexes.
**/
export class ColumnWildcard extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExcludedColumnNames" })
  excludedColumnNames?: string[];
}
