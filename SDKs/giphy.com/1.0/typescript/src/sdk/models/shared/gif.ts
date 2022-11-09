import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";
import { Image } from "./image";
import { User } from "./user";


// GifImages
/** 
 * An object containing data for various available formats and sizes of this GIF.
**/
export class GifImages extends SpeakeasyBase {
  @Metadata({ data: "json, name=downsized" })
  downsized?: Image;

  @Metadata({ data: "json, name=downsized_large" })
  downsizedLarge?: Image;

  @Metadata({ data: "json, name=downsized_medium" })
  downsizedMedium?: Image;

  @Metadata({ data: "json, name=downsized_small" })
  downsizedSmall?: Image;

  @Metadata({ data: "json, name=downsized_still" })
  downsizedStill?: Image;

  @Metadata({ data: "json, name=fixed_height" })
  fixedHeight?: Image;

  @Metadata({ data: "json, name=fixed_height_downsampled" })
  fixedHeightDownsampled?: Image;

  @Metadata({ data: "json, name=fixed_height_small" })
  fixedHeightSmall?: Image;

  @Metadata({ data: "json, name=fixed_height_small_still" })
  fixedHeightSmallStill?: Image;

  @Metadata({ data: "json, name=fixed_height_still" })
  fixedHeightStill?: Image;

  @Metadata({ data: "json, name=fixed_width" })
  fixedWidth?: Image;

  @Metadata({ data: "json, name=fixed_width_downsampled" })
  fixedWidthDownsampled?: Image;

  @Metadata({ data: "json, name=fixed_width_small" })
  fixedWidthSmall?: Image;

  @Metadata({ data: "json, name=fixed_width_small_still" })
  fixedWidthSmallStill?: Image;

  @Metadata({ data: "json, name=fixed_width_still" })
  fixedWidthStill?: Image;

  @Metadata({ data: "json, name=looping" })
  looping?: Image;

  @Metadata({ data: "json, name=original" })
  original?: Image;

  @Metadata({ data: "json, name=original_still" })
  originalStill?: Image;

  @Metadata({ data: "json, name=preview" })
  preview?: Image;

  @Metadata({ data: "json, name=preview_gif" })
  previewGif?: Image;
}

export enum GifTypeEnum {
    Gif = "gif"
}


export class Gif extends SpeakeasyBase {
  @Metadata({ data: "json, name=bitly_url" })
  bitlyUrl?: string;

  @Metadata({ data: "json, name=content_url" })
  contentUrl?: string;

  @Metadata({ data: "json, name=create_datetime" })
  createDatetime?: Date;

  @Metadata({ data: "json, name=embded_url" })
  embdedUrl?: string;

  @Metadata({ data: "json, name=featured_tags" })
  featuredTags?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=images" })
  images?: GifImages;

  @Metadata({ data: "json, name=import_datetime" })
  importDatetime?: Date;

  @Metadata({ data: "json, name=rating" })
  rating?: string;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=source_post_url" })
  sourcePostUrl?: string;

  @Metadata({ data: "json, name=source_tld" })
  sourceTld?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=trending_datetime" })
  trendingDatetime?: Date;

  @Metadata({ data: "json, name=type" })
  type?: GifTypeEnum;

  @Metadata({ data: "json, name=update_datetime" })
  updateDatetime?: Date;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=user" })
  user?: User;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
