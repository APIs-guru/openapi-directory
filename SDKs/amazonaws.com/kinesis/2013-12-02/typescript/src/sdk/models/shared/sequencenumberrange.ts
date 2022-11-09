import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SequenceNumberRange
/** 
 * The range of possible sequence numbers for the shard.
**/
export class SequenceNumberRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndingSequenceNumber" })
  endingSequenceNumber?: string;

  @Metadata({ data: "json, name=StartingSequenceNumber" })
  startingSequenceNumber: string;
}
