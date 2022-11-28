import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationSummary } from "./classificationsummary";
import { Offer } from "./offer";
import { Theme } from "./theme";
export declare enum ItemSummaryTypeEnum {
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
export declare class ItemSummary extends SpeakeasyBase {
    advisoryText?: string;
    availableEpisodeCount?: number;
    availableSeasonCount?: number;
    averageUserRating?: number;
    badge?: string;
    channelShortCode?: string;
    classification?: ClassificationSummary;
    contextualTitle?: string;
    customFields?: Map<string, any>;
    customId?: string;
    duration?: number;
    episodeCount?: number;
    episodeName?: string;
    episodeNumber?: number;
    genres?: string[];
    hasClosedCaptions?: boolean;
    id: string;
    images?: Map<string, string>;
    offers?: Offer[];
    path: string;
    releaseYear?: number;
    scopes?: string[];
    seasonId?: string;
    seasonNumber?: number;
    shortDescription?: string;
    showId?: string;
    showTitle?: string;
    subtype?: string;
    tagline?: string;
    themes?: Theme[];
    title: string;
    type: ItemSummaryTypeEnum;
    watchPath?: string;
}
