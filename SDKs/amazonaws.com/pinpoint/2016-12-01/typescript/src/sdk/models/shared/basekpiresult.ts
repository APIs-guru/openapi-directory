import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResultRow } from "./resultrow";



// BaseKpiResult
/** 
 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
**/
export class BaseKpiResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Rows", elemType: ResultRow })
  rows: ResultRow[];
}
