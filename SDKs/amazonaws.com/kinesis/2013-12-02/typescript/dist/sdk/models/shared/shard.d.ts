import { SpeakeasyBase } from "../../../internal/utils";
import { HashKeyRange } from "./hashkeyrange";
import { SequenceNumberRange } from "./sequencenumberrange";
/**
 * A uniquely identified group of data records in a Kinesis data stream.
**/
export declare class Shard extends SpeakeasyBase {
    adjacentParentShardId?: string;
    hashKeyRange: HashKeyRange;
    parentShardId?: string;
    sequenceNumberRange: SequenceNumberRange;
    shardId: string;
}
