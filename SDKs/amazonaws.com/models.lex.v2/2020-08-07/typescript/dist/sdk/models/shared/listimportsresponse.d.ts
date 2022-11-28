import { SpeakeasyBase } from "../../../internal/utils";
import { ImportSummary } from "./importsummary";
export declare class ListImportsResponse extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    importSummaries?: ImportSummary[];
    nextToken?: string;
}
