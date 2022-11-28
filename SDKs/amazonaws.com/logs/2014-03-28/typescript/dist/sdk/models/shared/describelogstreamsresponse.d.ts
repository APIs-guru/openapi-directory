import { SpeakeasyBase } from "../../../internal/utils";
import { LogStream } from "./logstream";
export declare class DescribeLogStreamsResponse extends SpeakeasyBase {
    logStreams?: LogStream[];
    nextToken?: string;
}
