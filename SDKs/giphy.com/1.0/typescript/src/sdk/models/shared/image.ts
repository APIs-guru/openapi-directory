import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=frames" })
  frames?: string;

  @Metadata({ data: "json, name=height" })
  height?: string;

  @Metadata({ data: "json, name=mp4" })
  mp4?: string;

  @Metadata({ data: "json, name=mp4_size" })
  mp4Size?: string;

  @Metadata({ data: "json, name=size" })
  size?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=webp" })
  webp?: string;

  @Metadata({ data: "json, name=webp_size" })
  webpSize?: string;

  @Metadata({ data: "json, name=width" })
  width?: string;
}
