import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisStreamsInput
/** 
 *  Identifies a Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN).
**/
export class KinesisStreamsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn: string;
}
