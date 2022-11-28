import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AudioMetadata
/** 
 * Metadata information about an audio stream. An array of <code>AudioMetadata</code> objects for the audio streams found in a stored video is returned by <a>GetSegmentDetection</a>. 
**/
export class AudioMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Codec" })
  codec?: string;

  @SpeakeasyMetadata({ data: "json, name=DurationMillis" })
  durationMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfChannels" })
  numberOfChannels?: number;

  @SpeakeasyMetadata({ data: "json, name=SampleRate" })
  sampleRate?: number;
}
