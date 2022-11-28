import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HashKeyRange
/** 
 * The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.
**/
export class HashKeyRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndingHashKey" })
  endingHashKey: string;

  @SpeakeasyMetadata({ data: "json, name=StartingHashKey" })
  startingHashKey: string;
}
