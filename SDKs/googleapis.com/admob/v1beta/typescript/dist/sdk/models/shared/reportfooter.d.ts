import { SpeakeasyBase } from "../../../internal/utils";
import { ReportWarning } from "./reportwarning";
/**
 * Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response.
**/
export declare class ReportFooter extends SpeakeasyBase {
    matchingRowCount?: string;
    warnings?: ReportWarning[];
}
