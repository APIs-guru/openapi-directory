import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PerformanceReport } from "./performancereport";



// PerformanceReportList
/** 
 * The configuration data for an Ad Exchange performance report list.
**/
export class PerformanceReportList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=performanceReport", elemType: PerformanceReport })
  performanceReport?: PerformanceReport[];
}
