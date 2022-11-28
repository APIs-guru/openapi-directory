import { SpeakeasyBase } from "../../../internal/utils";
import { DateRangeValues } from "./daterangevalues";
/**
 * A row in the report.
**/
export declare class ReportRow extends SpeakeasyBase {
    dimensions?: string[];
    metrics?: DateRangeValues[];
}
