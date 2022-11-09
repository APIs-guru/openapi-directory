import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VideoSearchItemDisplaySize extends SpeakeasyBase {
  @Metadata({ data: "json, name=aspect_ratio" })
  aspectRatio?: string;

  @Metadata({ data: "json, name=is_watermarked" })
  isWatermarked?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
