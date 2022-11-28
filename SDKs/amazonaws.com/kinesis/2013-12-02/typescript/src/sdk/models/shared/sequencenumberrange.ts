import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SequenceNumberRange
/** 
 * The range of possible sequence numbers for the shard.
**/
export class SequenceNumberRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndingSequenceNumber" })
  endingSequenceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=StartingSequenceNumber" })
  startingSequenceNumber: string;
}
