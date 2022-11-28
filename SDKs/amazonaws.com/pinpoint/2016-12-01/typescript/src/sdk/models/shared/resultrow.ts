import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResultRowValue } from "./resultrowvalue";



// ResultRow
/** 
 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
**/
export class ResultRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupedBys", elemType: ResultRowValue })
  groupedBys: ResultRowValue[];

  @SpeakeasyMetadata({ data: "json, name=Values", elemType: ResultRowValue })
  values: ResultRowValue[];
}
