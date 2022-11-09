import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResultRow } from "./resultrow";


// BaseKpiResult
/** 
 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
**/
export class BaseKpiResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Rows", elemType: shared.ResultRow })
  rows: ResultRow[];
}
