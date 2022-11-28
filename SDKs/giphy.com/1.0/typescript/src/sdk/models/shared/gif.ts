import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { User } from "./user";



// GifImages
/** 
 * An object containing data for various available formats and sizes of this GIF.
**/
export class GifImages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downsized" })
  downsized?: Image;

  @SpeakeasyMetadata({ data: "json, name=downsized_large" })
  downsizedLarge?: Image;

  @SpeakeasyMetadata({ data: "json, name=downsized_medium" })
  downsizedMedium?: Image;

  @SpeakeasyMetadata({ data: "json, name=downsized_small" })
  downsizedSmall?: Image;

  @SpeakeasyMetadata({ data: "json, name=downsized_still" })
  downsizedStill?: Image;

  @SpeakeasyMetadata({ data: "json, name=fixed_height" })
  fixedHeight?: Image;

  @SpeakeasyMetadata({ data: "json, name=fixed_height_downsampled" })
  fixedHeightDownsampled?: Image;

  @SpeakeasyMetadata({ data: "json, name=fixed_height_small" })
  fixedHeightSmall?: Image;

  @SpeakeasyMetadata({ data: "json, name=fixed_height_small_still" })
  fixedHeightSmallStill?: Image;

  @SpeakeasyMetadata({ data: "json, name=fixed_height_still" })
  fixedHeightStill?: Image;

  @SpeakeasyMetadata({ data: "json, name=fixed_width" })
  fixedWidth?: Image;

  @SpeakeasyMetadata({ data: "json, name=fixed_width_downsampled" })
  fixedWidthDownsampled?: Image;

  @SpeakeasyMetadata({ data: "json, name=fixed_width_small" })
  fixedWidthSmall?: Image;

  @SpeakeasyMetadata({ data: "json, name=fixed_width_small_still" })
  fixedWidthSmallStill?: Image;

  @SpeakeasyMetadata({ data: "json, name=fixed_width_still" })
  fixedWidthStill?: Image;

  @SpeakeasyMetadata({ data: "json, name=looping" })
  looping?: Image;

  @SpeakeasyMetadata({ data: "json, name=original" })
  original?: Image;

  @SpeakeasyMetadata({ data: "json, name=original_still" })
  originalStill?: Image;

  @SpeakeasyMetadata({ data: "json, name=preview" })
  preview?: Image;

  @SpeakeasyMetadata({ data: "json, name=preview_gif" })
  previewGif?: Image;
}

export enum GifTypeEnum {
    Gif = "gif"
}


export class Gif extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bitly_url" })
  bitlyUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=content_url" })
  contentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=create_datetime" })
  createDatetime?: Date;

  @SpeakeasyMetadata({ data: "json, name=embded_url" })
  embdedUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=featured_tags" })
  featuredTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=images" })
  images?: GifImages;

  @SpeakeasyMetadata({ data: "json, name=import_datetime" })
  importDatetime?: Date;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=source_post_url" })
  sourcePostUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=source_tld" })
  sourceTld?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=trending_datetime" })
  trendingDatetime?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GifTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=update_datetime" })
  updateDatetime?: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
