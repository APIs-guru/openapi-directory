import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SequenceNumberRange
/** 
 * The beginning and ending sequence numbers for the stream records contained within a shard.
**/
export class SequenceNumberRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndingSequenceNumber" })
  endingSequenceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=StartingSequenceNumber" })
  startingSequenceNumber?: string;
}
