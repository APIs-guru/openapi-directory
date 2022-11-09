import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisStreamsInput
/** 
 *  Identifies a Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN).
**/
export class KinesisStreamsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn: string;
}
