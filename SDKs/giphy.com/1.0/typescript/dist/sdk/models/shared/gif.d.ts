import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { User } from "./user";
/**
 * An object containing data for various available formats and sizes of this GIF.
**/
export declare class GifImages extends SpeakeasyBase {
    downsized?: Image;
    downsizedLarge?: Image;
    downsizedMedium?: Image;
    downsizedSmall?: Image;
    downsizedStill?: Image;
    fixedHeight?: Image;
    fixedHeightDownsampled?: Image;
    fixedHeightSmall?: Image;
    fixedHeightSmallStill?: Image;
    fixedHeightStill?: Image;
    fixedWidth?: Image;
    fixedWidthDownsampled?: Image;
    fixedWidthSmall?: Image;
    fixedWidthSmallStill?: Image;
    fixedWidthStill?: Image;
    looping?: Image;
    original?: Image;
    originalStill?: Image;
    preview?: Image;
    previewGif?: Image;
}
export declare enum GifTypeEnum {
    Gif = "gif"
}
export declare class Gif extends SpeakeasyBase {
    bitlyUrl?: string;
    contentUrl?: string;
    createDatetime?: Date;
    embdedUrl?: string;
    featuredTags?: string[];
    id?: string;
    images?: GifImages;
    importDatetime?: Date;
    rating?: string;
    slug?: string;
    source?: string;
    sourcePostUrl?: string;
    sourceTld?: string;
    tags?: string[];
    trendingDatetime?: Date;
    type?: GifTypeEnum;
    updateDatetime?: Date;
    url?: string;
    user?: User;
    username?: string;
}
