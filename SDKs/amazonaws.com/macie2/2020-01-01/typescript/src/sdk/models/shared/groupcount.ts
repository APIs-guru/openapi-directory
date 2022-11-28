import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupCount
/** 
 * Provides a group of results for a query that retrieved aggregated statistical data about findings.
**/
export class GroupCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=groupKey" })
  groupKey?: string;
}
