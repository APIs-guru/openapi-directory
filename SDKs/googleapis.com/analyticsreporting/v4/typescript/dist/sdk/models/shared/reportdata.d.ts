import { SpeakeasyBase } from "../../../internal/utils";
import { DateRangeValues } from "./daterangevalues";
import { ReportRow } from "./reportrow";
/**
 * The data part of the report.
**/
export declare class ReportData extends SpeakeasyBase {
    dataLastRefreshed?: string;
    emptyReason?: string;
    isDataGolden?: boolean;
    maximums?: DateRangeValues[];
    minimums?: DateRangeValues[];
    rowCount?: number;
    rows?: ReportRow[];
    samplesReadCounts?: string[];
    samplingSpaceSizes?: string[];
    totals?: DateRangeValues[];
}
