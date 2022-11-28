import { SpeakeasyBase } from "../../../internal/utils";
import { Stream } from "./stream";
/**
 * Represents the output of a <code>ListStreams</code> operation.
**/
export declare class ListStreamsOutput extends SpeakeasyBase {
    lastEvaluatedStreamArn?: string;
    streams?: Stream[];
}
