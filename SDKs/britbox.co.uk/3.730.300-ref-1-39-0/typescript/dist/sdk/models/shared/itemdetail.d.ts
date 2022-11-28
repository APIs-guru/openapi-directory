import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationSummary } from "./classificationsummary";
import { Credit } from "./credit";
import { ItemCustomMetadata } from "./itemcustommetadata";
import { ItemList } from "./itemlist";
import { Offer } from "./offer";
import { Theme } from "./theme";
import { ItemSummary } from "./itemsummary";
export declare enum ItemDetailTypeEnum {
    Movie = "movie",
    Show = "show",
    Season = "season",
    Episode = "episode",
    Program = "program",
    Link = "link",
    Trailer = "trailer",
    Channel = "channel",
    CustomAsset = "customAsset"
}
export declare class ItemDetail extends SpeakeasyBase {
    advisoryText?: string;
    availableEpisodeCount?: number;
    availableSeasonCount?: number;
    averageUserRating?: number;
    badge?: string;
    channelShortCode?: string;
    classification?: ClassificationSummary;
    contextualTitle?: string;
    copyright?: string;
    credits?: Credit[];
    customFields?: Map<string, any>;
    customId?: string;
    customMetadata?: ItemCustomMetadata[];
    description?: string;
    distributor?: string;
    duration?: number;
    episodeCount?: number;
    episodeName?: string;
    episodeNumber?: number;
    episodes?: ItemList;
    eventDate?: Date;
    genrePaths?: string[];
    genres?: string[];
    hasClosedCaptions?: boolean;
    id: string;
    images?: Map<string, string>;
    location?: string;
    offers?: Offer[];
    path: string;
    releaseYear?: number;
    scopes?: string[];
    season?: ItemDetail;
    seasonId?: string;
    seasonNumber?: number;
    seasons?: ItemList;
    shortDescription?: string;
    show?: ItemDetail;
    showId?: string;
    showTitle?: string;
    subtype?: string;
    tagline?: string;
    themes?: Theme[];
    title: string;
    totalUserRatings?: number;
    trailers?: ItemSummary[];
    type: ItemDetailTypeEnum;
    venue?: string;
    watchPath?: string;
}
