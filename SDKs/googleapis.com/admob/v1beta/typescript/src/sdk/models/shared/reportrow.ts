import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportRowDimensionValue } from "./reportrowdimensionvalue";
import { ReportRowMetricValue } from "./reportrowmetricvalue";


// ReportRow
/** 
 * A row of the returning report.
**/
export class ReportRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionValues", elemType: shared.ReportRowDimensionValue })
  dimensionValues?: Map<string, ReportRowDimensionValue>;

  @Metadata({ data: "json, name=metricValues", elemType: shared.ReportRowMetricValue })
  metricValues?: Map<string, ReportRowMetricValue>;
}
