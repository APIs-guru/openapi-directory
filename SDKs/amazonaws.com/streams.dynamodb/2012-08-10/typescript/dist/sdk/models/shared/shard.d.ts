import { SpeakeasyBase } from "../../../internal/utils";
import { SequenceNumberRange } from "./sequencenumberrange";
/**
 * A uniquely identified group of stream records within a stream.
**/
export declare class Shard extends SpeakeasyBase {
    parentShardId?: string;
    sequenceNumberRange?: SequenceNumberRange;
    shardId?: string;
}
