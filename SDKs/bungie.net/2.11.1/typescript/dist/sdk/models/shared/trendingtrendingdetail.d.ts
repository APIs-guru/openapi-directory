import { SpeakeasyBase } from "../../../internal/utils";
import { TrendingTrendingEntryCommunityCreation } from "./trendingtrendingentrycommunitycreation";
import { TrendingTrendingEntryDestinyActivity } from "./trendingtrendingentrydestinyactivity";
import { TrendingTrendingEntryDestinyItem } from "./trendingtrendingentrydestinyitem";
import { TrendingTrendingEntryDestinyRitual } from "./trendingtrendingentrydestinyritual";
import { TrendingTrendingEntryNews } from "./trendingtrendingentrynews";
import { TrendingTrendingEntrySupportArticle } from "./trendingtrendingentrysupportarticle";
export declare class TrendingTrendingDetail extends SpeakeasyBase {
    creation?: TrendingTrendingEntryCommunityCreation;
    destinyActivity?: TrendingTrendingEntryDestinyActivity;
    destinyItem?: TrendingTrendingEntryDestinyItem;
    destinyRitual?: TrendingTrendingEntryDestinyRitual;
    entityType?: number;
    identifier?: string;
    news?: TrendingTrendingEntryNews;
    support?: TrendingTrendingEntrySupportArticle;
}
