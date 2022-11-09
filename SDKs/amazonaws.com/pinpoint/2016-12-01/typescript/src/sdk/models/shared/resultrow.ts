import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResultRowValue } from "./resultrowvalue";
import { ResultRowValue } from "./resultrowvalue";


// ResultRow
/** 
 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
**/
export class ResultRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupedBys", elemType: shared.ResultRowValue })
  groupedBys: ResultRowValue[];

  @Metadata({ data: "json, name=Values", elemType: shared.ResultRowValue })
  values: ResultRowValue[];
}
