import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KinesisVideoStream } from "./kinesisvideostream";


// StreamProcessorInput
/** 
 * Information about the source streaming video. 
**/
export class StreamProcessorInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=KinesisVideoStream" })
  kinesisVideoStream?: KinesisVideoStream;
}
