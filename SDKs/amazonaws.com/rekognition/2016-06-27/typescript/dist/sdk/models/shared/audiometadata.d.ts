import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata information about an audio stream. An array of <code>AudioMetadata</code> objects for the audio streams found in a stored video is returned by <a>GetSegmentDetection</a>.
**/
export declare class AudioMetadata extends SpeakeasyBase {
    codec?: string;
    durationMillis?: number;
    numberOfChannels?: number;
    sampleRate?: number;
}
