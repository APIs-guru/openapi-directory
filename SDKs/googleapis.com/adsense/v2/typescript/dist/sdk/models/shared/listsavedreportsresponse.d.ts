import { SpeakeasyBase } from "../../../internal/utils";
import { SavedReport } from "./savedreport";
/**
 * Response definition for the saved reports list rpc.
**/
export declare class ListSavedReportsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    savedReports?: SavedReport[];
}
