import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The beginning and ending sequence numbers for the stream records contained within a shard.
**/
export declare class SequenceNumberRange extends SpeakeasyBase {
    endingSequenceNumber?: string;
    startingSequenceNumber?: string;
}
