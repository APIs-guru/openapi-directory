import { SpeakeasyBase } from "../../../internal/utils";
import { ShardIteratorTypeEnum } from "./sharditeratortypeenum";
/**
 * Represents the input for <code>GetShardIterator</code>.
**/
export declare class GetShardIteratorInput extends SpeakeasyBase {
    shardId: string;
    shardIteratorType: ShardIteratorTypeEnum;
    startingSequenceNumber?: string;
    streamName: string;
    timestamp?: Date;
}
