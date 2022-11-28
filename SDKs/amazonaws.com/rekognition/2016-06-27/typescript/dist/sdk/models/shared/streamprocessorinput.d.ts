import { SpeakeasyBase } from "../../../internal/utils";
import { KinesisVideoStream } from "./kinesisvideostream";
/**
 * Information about the source streaming video.
**/
export declare class StreamProcessorInput extends SpeakeasyBase {
    kinesisVideoStream?: KinesisVideoStream;
}
