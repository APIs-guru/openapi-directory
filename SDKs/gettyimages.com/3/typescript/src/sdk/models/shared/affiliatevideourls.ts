import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AffiliateVideoUrls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=large_motion" })
  largeMotion?: string;

  @SpeakeasyMetadata({ data: "json, name=large_still" })
  largeStill?: string;

  @SpeakeasyMetadata({ data: "json, name=medium_still" })
  mediumStill?: string;

  @SpeakeasyMetadata({ data: "json, name=small_motion" })
  smallMotion?: string;

  @SpeakeasyMetadata({ data: "json, name=small_still" })
  smallStill?: string;
}
