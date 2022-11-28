import { SpeakeasyBase } from "../../../internal/utils";
import { Trace } from "./trace";
export declare class BatchGetTracesResult extends SpeakeasyBase {
    nextToken?: string;
    traces?: Trace[];
    unprocessedTraceIds?: string[];
}
