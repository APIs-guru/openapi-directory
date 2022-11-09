import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PerformanceReport } from "./performancereport";


// PerformanceReportList
/** 
 * The configuration data for an Ad Exchange performance report list.
**/
export class PerformanceReportList extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=performanceReport", elemType: shared.PerformanceReport })
  performanceReport?: PerformanceReport[];
}
