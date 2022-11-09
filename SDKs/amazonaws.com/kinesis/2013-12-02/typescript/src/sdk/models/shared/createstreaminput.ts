import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateStreamInput
/** 
 * Represents the input for <code>CreateStream</code>.
**/
export class CreateStreamInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ShardCount" })
  shardCount: number;

  @Metadata({ data: "json, name=StreamName" })
  streamName: string;
}
