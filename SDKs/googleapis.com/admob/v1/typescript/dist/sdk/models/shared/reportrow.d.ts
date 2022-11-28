import { SpeakeasyBase } from "../../../internal/utils";
import { ReportRowDimensionValue } from "./reportrowdimensionvalue";
import { ReportRowMetricValue } from "./reportrowmetricvalue";
/**
 * A row of the returning report.
**/
export declare class ReportRow extends SpeakeasyBase {
    dimensionValues?: Map<string, ReportRowDimensionValue>;
    metricValues?: Map<string, ReportRowMetricValue>;
}
