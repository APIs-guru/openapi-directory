import { SpeakeasyBase } from "../../../internal/utils";
import { ExportSummary } from "./exportsummary";
export declare class ListExportsResponse extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    exportSummaries?: ExportSummary[];
    nextToken?: string;
}
