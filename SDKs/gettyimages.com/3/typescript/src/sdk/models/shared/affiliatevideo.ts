import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AffiliateVideoUrls } from "./affiliatevideourls";


export class AffiliateVideo extends SpeakeasyBase {
  @Metadata({ data: "json, name=caption" })
  caption?: string;

  @Metadata({ data: "json, name=clip_length" })
  clipLength?: string;

  @Metadata({ data: "json, name=destination_url" })
  destinationUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=preview_urls" })
  previewUrls?: AffiliateVideoUrls;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
