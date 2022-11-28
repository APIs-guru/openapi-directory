import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KinesisVideoStream } from "./kinesisvideostream";



// StreamProcessorInput
/** 
 * Information about the source streaming video. 
**/
export class StreamProcessorInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KinesisVideoStream" })
  kinesisVideoStream?: KinesisVideoStream;
}
