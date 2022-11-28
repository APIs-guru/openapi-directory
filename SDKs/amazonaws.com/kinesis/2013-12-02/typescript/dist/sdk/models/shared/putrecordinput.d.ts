import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for <code>PutRecord</code>.
**/
export declare class PutRecordInput extends SpeakeasyBase {
    data: string;
    explicitHashKey?: string;
    partitionKey: string;
    sequenceNumberForOrdering?: string;
    streamName: string;
}
