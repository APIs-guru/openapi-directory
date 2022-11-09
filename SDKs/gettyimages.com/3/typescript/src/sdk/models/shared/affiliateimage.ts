import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AffiliateImageUrls } from "./affiliateimageurls";


export class AffiliateImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=caption" })
  caption?: string;

  @Metadata({ data: "json, name=destination_url" })
  destinationUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=preview_urls" })
  previewUrls?: AffiliateImageUrls;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
