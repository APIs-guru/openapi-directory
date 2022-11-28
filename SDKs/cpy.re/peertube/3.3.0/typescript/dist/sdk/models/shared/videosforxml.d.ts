import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VideosForXmlEnclosureTypeEnum {
    ApplicationXBittorrent = "application/x-bittorrent"
}
/**
 * main streamable file for the video
**/
export declare class VideosForXmlEnclosure extends SpeakeasyBase {
    length?: number;
    type?: VideosForXmlEnclosureTypeEnum;
    url?: string;
}
export declare class VideosForXmlMediaCommunityMediaStatistics extends SpeakeasyBase {
    views?: number;
}
/**
 * see [media:community](https://www.rssboard.org/media-rss#media-community) (MRSS)
**/
export declare class VideosForXmlMediaCommunity extends SpeakeasyBase {
    mediaStatistics?: VideosForXmlMediaCommunityMediaStatistics;
}
export declare class VideosForXmlMediaEmbed extends SpeakeasyBase {
    url?: string;
}
export declare class VideosForXmlMediaPlayer extends SpeakeasyBase {
    url?: string;
}
export declare enum VideosForXmlMediaRatingEnum {
    Nonadult = "nonadult",
    Adult = "adult"
}
export declare class VideosForXmlMediaThumbnail extends SpeakeasyBase {
    height?: number;
    url?: string;
    width?: number;
}
export declare class VideosForXml extends SpeakeasyBase {
    contentEncoded?: string;
    dcCreator?: string;
    description?: string;
    enclosure?: VideosForXmlEnclosure;
    guid?: string;
    link?: string;
    mediaCategory?: number;
    mediaCommunity?: VideosForXmlMediaCommunity;
    mediaDescription?: string;
    mediaEmbed?: VideosForXmlMediaEmbed;
    mediaGroup?: any[];
    mediaPlayer?: VideosForXmlMediaPlayer;
    mediaRating?: VideosForXmlMediaRatingEnum;
    mediaThumbnail?: VideosForXmlMediaThumbnail;
    mediaTitle?: string;
    pubDate?: Date;
}
