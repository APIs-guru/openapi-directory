import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AffiliateImageUrls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=large" })
  large?: string;

  @SpeakeasyMetadata({ data: "json, name=large_height" })
  largeHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=large_width" })
  largeWidth?: number;

  @SpeakeasyMetadata({ data: "json, name=medium" })
  medium?: string;

  @SpeakeasyMetadata({ data: "json, name=medium_height" })
  mediumHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=medium_width" })
  mediumWidth?: number;

  @SpeakeasyMetadata({ data: "json, name=small" })
  small?: string;

  @SpeakeasyMetadata({ data: "json, name=small_height" })
  smallHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=small_width" })
  smallWidth?: number;
}
