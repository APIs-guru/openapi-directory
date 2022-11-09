import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AudioMetadata
/** 
 * Metadata information about an audio stream. An array of <code>AudioMetadata</code> objects for the audio streams found in a stored video is returned by <a>GetSegmentDetection</a>. 
**/
export class AudioMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Codec" })
  codec?: string;

  @Metadata({ data: "json, name=DurationMillis" })
  durationMillis?: number;

  @Metadata({ data: "json, name=NumberOfChannels" })
  numberOfChannels?: number;

  @Metadata({ data: "json, name=SampleRate" })
  sampleRate?: number;
}
