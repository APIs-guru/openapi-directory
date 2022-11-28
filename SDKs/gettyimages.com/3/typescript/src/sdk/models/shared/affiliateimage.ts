import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AffiliateImageUrls } from "./affiliateimageurls";



export class AffiliateImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=destination_url" })
  destinationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=preview_urls" })
  previewUrls?: AffiliateImageUrls;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
