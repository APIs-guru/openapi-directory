import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=frames" })
  frames?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: string;

  @SpeakeasyMetadata({ data: "json, name=mp4" })
  mp4?: string;

  @SpeakeasyMetadata({ data: "json, name=mp4_size" })
  mp4Size?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=webp" })
  webp?: string;

  @SpeakeasyMetadata({ data: "json, name=webp_size" })
  webpSize?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: string;
}
