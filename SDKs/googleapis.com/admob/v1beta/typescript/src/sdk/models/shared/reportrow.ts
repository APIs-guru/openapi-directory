import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportRowDimensionValue } from "./reportrowdimensionvalue";
import { ReportRowMetricValue } from "./reportrowmetricvalue";



// ReportRow
/** 
 * A row of the returning report.
**/
export class ReportRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensionValues", elemType: ReportRowDimensionValue })
  dimensionValues?: Map<string, ReportRowDimensionValue>;

  @SpeakeasyMetadata({ data: "json, name=metricValues", elemType: ReportRowMetricValue })
  metricValues?: Map<string, ReportRowMetricValue>;
}
