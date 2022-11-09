import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HashKeyRange
/** 
 * The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.
**/
export class HashKeyRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndingHashKey" })
  endingHashKey: string;

  @Metadata({ data: "json, name=StartingHashKey" })
  startingHashKey: string;
}
