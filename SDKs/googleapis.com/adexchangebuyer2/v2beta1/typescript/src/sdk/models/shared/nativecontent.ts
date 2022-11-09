import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";


// NativeContent
/** 
 * Native content for a creative.
**/
export class NativeContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserName" })
  advertiserName?: string;

  @Metadata({ data: "json, name=appIcon" })
  appIcon?: Image;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=callToAction" })
  callToAction?: string;

  @Metadata({ data: "json, name=clickLinkUrl" })
  clickLinkUrl?: string;

  @Metadata({ data: "json, name=clickTrackingUrl" })
  clickTrackingUrl?: string;

  @Metadata({ data: "json, name=headline" })
  headline?: string;

  @Metadata({ data: "json, name=image" })
  image?: Image;

  @Metadata({ data: "json, name=logo" })
  logo?: Image;

  @Metadata({ data: "json, name=priceDisplayText" })
  priceDisplayText?: string;

  @Metadata({ data: "json, name=starRating" })
  starRating?: number;

  @Metadata({ data: "json, name=storeUrl" })
  storeUrl?: string;

  @Metadata({ data: "json, name=videoUrl" })
  videoUrl?: string;
}
