import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HeroImageDisplaySize extends SpeakeasyBase {
  @Metadata({ data: "json, name=is_watermarked" })
  isWatermarked?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
