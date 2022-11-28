import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>ListStreams</code> operation.
**/
export declare class ListStreamsInput extends SpeakeasyBase {
    exclusiveStartStreamArn?: string;
    limit?: number;
    tableName?: string;
}
