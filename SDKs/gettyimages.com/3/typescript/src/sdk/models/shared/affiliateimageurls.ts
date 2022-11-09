import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AffiliateImageUrls extends SpeakeasyBase {
  @Metadata({ data: "json, name=large" })
  large?: string;

  @Metadata({ data: "json, name=large_height" })
  largeHeight?: number;

  @Metadata({ data: "json, name=large_width" })
  largeWidth?: number;

  @Metadata({ data: "json, name=medium" })
  medium?: string;

  @Metadata({ data: "json, name=medium_height" })
  mediumHeight?: number;

  @Metadata({ data: "json, name=medium_width" })
  mediumWidth?: number;

  @Metadata({ data: "json, name=small" })
  small?: string;

  @Metadata({ data: "json, name=small_height" })
  smallHeight?: number;

  @Metadata({ data: "json, name=small_width" })
  smallWidth?: number;
}
