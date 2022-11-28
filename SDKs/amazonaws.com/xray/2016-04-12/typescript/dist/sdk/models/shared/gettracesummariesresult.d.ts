import { SpeakeasyBase } from "../../../internal/utils";
import { TraceSummary } from "./tracesummary";
export declare class GetTraceSummariesResult extends SpeakeasyBase {
    approximateTime?: Date;
    nextToken?: string;
    traceSummaries?: TraceSummary[];
    tracesProcessedCount?: number;
}
