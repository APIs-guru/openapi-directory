import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VideostatusEncodingMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aspectRatio" })
  aspectRatio?: string;

  @SpeakeasyMetadata({ data: "json, name=audioCodec" })
  audioCodec?: string;

  @SpeakeasyMetadata({ data: "json, name=bitrate" })
  bitrate?: number;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=framerate" })
  framerate?: number;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=samplerate" })
  samplerate?: number;

  @SpeakeasyMetadata({ data: "json, name=videoCodec" })
  videoCodec?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
