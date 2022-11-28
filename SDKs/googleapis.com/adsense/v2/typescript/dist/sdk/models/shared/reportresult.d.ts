import { SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";
import { Date } from "./date";
import { Header } from "./header";
/**
 * Result of a generated report.
**/
export declare class ReportResult extends SpeakeasyBase {
    averages?: Row;
    endDate?: Date;
    headers?: Header[];
    rows?: Row[];
    startDate?: Date;
    totalMatchedRows?: string;
    totals?: Row;
    warnings?: string[];
}
