import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MrssPeerLink } from "./mrsspeerlink";
import { MrssGroupContent } from "./mrssgroupcontent";


export enum VideosForXmlEnclosureTypeEnum {
    ApplicationXBittorrent = "application/x-bittorrent"
}


// VideosForXmlEnclosure
/** 
 * main streamable file for the video
**/
export class VideosForXmlEnclosure extends SpeakeasyBase {
  @SpeakeasyMetadata()
  length?: number;

  @SpeakeasyMetadata()
  type?: VideosForXmlEnclosureTypeEnum;

  @SpeakeasyMetadata()
  url?: string;
}


export class VideosForXmlMediaCommunityMediaStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata()
  views?: number;
}


// VideosForXmlMediaCommunity
/** 
 * see [media:community](https://www.rssboard.org/media-rss#media-community) (MRSS)
**/
export class VideosForXmlMediaCommunity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  mediaStatistics?: VideosForXmlMediaCommunityMediaStatistics;
}


export class VideosForXmlMediaEmbed extends SpeakeasyBase {
  @SpeakeasyMetadata()
  url?: string;
}


export class VideosForXmlMediaPlayer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  url?: string;
}

export enum VideosForXmlMediaRatingEnum {
    Nonadult = "nonadult",
    Adult = "adult"
}


export class VideosForXmlMediaThumbnail extends SpeakeasyBase {
  @SpeakeasyMetadata()
  height?: number;

  @SpeakeasyMetadata()
  url?: string;

  @SpeakeasyMetadata()
  width?: number;
}


export class VideosForXml extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentEncoded?: string;

  @SpeakeasyMetadata()
  dcCreator?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  enclosure?: VideosForXmlEnclosure;

  @SpeakeasyMetadata()
  guid?: string;

  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  mediaCategory?: number;

  @SpeakeasyMetadata()
  mediaCommunity?: VideosForXmlMediaCommunity;

  @SpeakeasyMetadata()
  mediaDescription?: string;

  @SpeakeasyMetadata()
  mediaEmbed?: VideosForXmlMediaEmbed;

  @SpeakeasyMetadata()
  mediaGroup?: any[];

  @SpeakeasyMetadata()
  mediaPlayer?: VideosForXmlMediaPlayer;

  @SpeakeasyMetadata()
  mediaRating?: VideosForXmlMediaRatingEnum;

  @SpeakeasyMetadata()
  mediaThumbnail?: VideosForXmlMediaThumbnail;

  @SpeakeasyMetadata()
  mediaTitle?: string;

  @SpeakeasyMetadata()
  pubDate?: Date;
}
