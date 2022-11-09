import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AffiliateVideoUrls extends SpeakeasyBase {
  @Metadata({ data: "json, name=large_motion" })
  largeMotion?: string;

  @Metadata({ data: "json, name=large_still" })
  largeStill?: string;

  @Metadata({ data: "json, name=medium_still" })
  mediumStill?: string;

  @Metadata({ data: "json, name=small_motion" })
  smallMotion?: string;

  @Metadata({ data: "json, name=small_still" })
  smallStill?: string;
}
