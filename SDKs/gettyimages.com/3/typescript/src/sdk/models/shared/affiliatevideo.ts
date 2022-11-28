import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AffiliateVideoUrls } from "./affiliatevideourls";



export class AffiliateVideo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=clip_length" })
  clipLength?: string;

  @SpeakeasyMetadata({ data: "json, name=destination_url" })
  destinationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=preview_urls" })
  previewUrls?: AffiliateVideoUrls;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
