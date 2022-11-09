import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VideostatusEncodingMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=aspectRatio" })
  aspectRatio?: string;

  @Metadata({ data: "json, name=audioCodec" })
  audioCodec?: string;

  @Metadata({ data: "json, name=bitrate" })
  bitrate?: number;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=framerate" })
  framerate?: number;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=samplerate" })
  samplerate?: number;

  @Metadata({ data: "json, name=videoCodec" })
  videoCodec?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
