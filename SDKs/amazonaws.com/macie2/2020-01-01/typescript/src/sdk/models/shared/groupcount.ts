import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupCount
/** 
 * Provides a group of results for a query that retrieved aggregated statistical data about findings.
**/
export class GroupCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=groupKey" })
  groupKey?: string;
}
