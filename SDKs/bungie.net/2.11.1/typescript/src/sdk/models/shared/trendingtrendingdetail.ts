import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrendingTrendingEntryCommunityCreation } from "./trendingtrendingentrycommunitycreation";
import { TrendingTrendingEntryDestinyActivity } from "./trendingtrendingentrydestinyactivity";
import { TrendingTrendingEntryDestinyItem } from "./trendingtrendingentrydestinyitem";
import { TrendingTrendingEntryDestinyRitual } from "./trendingtrendingentrydestinyritual";
import { TrendingTrendingEntryNews } from "./trendingtrendingentrynews";
import { TrendingTrendingEntrySupportArticle } from "./trendingtrendingentrysupportarticle";



export class TrendingTrendingDetail extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creation?: TrendingTrendingEntryCommunityCreation;

  @SpeakeasyMetadata()
  destinyActivity?: TrendingTrendingEntryDestinyActivity;

  @SpeakeasyMetadata()
  destinyItem?: TrendingTrendingEntryDestinyItem;

  @SpeakeasyMetadata()
  destinyRitual?: TrendingTrendingEntryDestinyRitual;

  @SpeakeasyMetadata()
  entityType?: number;

  @SpeakeasyMetadata()
  identifier?: string;

  @SpeakeasyMetadata()
  news?: TrendingTrendingEntryNews;

  @SpeakeasyMetadata()
  support?: TrendingTrendingEntrySupportArticle;
}
