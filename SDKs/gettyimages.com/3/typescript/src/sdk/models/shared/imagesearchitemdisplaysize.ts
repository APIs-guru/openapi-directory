import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageSearchItemDisplaySize extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=is_watermarked" })
  isWatermarked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
