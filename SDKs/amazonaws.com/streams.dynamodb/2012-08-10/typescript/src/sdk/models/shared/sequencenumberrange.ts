import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SequenceNumberRange
/** 
 * The beginning and ending sequence numbers for the stream records contained within a shard.
**/
export class SequenceNumberRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndingSequenceNumber" })
  endingSequenceNumber?: string;

  @Metadata({ data: "json, name=StartingSequenceNumber" })
  startingSequenceNumber?: string;
}
