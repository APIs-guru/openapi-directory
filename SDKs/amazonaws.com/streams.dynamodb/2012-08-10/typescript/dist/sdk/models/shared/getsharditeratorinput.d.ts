import { SpeakeasyBase } from "../../../internal/utils";
import { ShardIteratorTypeEnum } from "./sharditeratortypeenum";
/**
 * Represents the input of a <code>GetShardIterator</code> operation.
**/
export declare class GetShardIteratorInput extends SpeakeasyBase {
    sequenceNumber?: string;
    shardId: string;
    shardIteratorType: ShardIteratorTypeEnum;
    streamArn: string;
}
