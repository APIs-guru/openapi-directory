import { SpeakeasyBase } from "../../../internal/utils";
import { ImportFindingsError } from "./importfindingserror";
export declare class BatchImportFindingsResponse extends SpeakeasyBase {
    failedCount: number;
    failedFindings?: ImportFindingsError[];
    successCount: number;
}
