import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateStreamInput
/** 
 * Represents the input for <code>CreateStream</code>.
**/
export class CreateStreamInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ShardCount" })
  shardCount: number;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;
}
