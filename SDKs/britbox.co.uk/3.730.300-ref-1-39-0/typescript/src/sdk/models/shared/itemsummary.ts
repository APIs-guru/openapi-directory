import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClassificationSummary } from "./classificationsummary";
import { Offer } from "./offer";
import { Theme } from "./theme";

export enum ItemSummaryTypeEnum {
    Movie = "movie"
,    Show = "show"
,    Season = "season"
,    Episode = "episode"
,    Program = "program"
,    Link = "link"
,    Trailer = "trailer"
,    Channel = "channel"
,    CustomAsset = "customAsset"
}


export class ItemSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=advisoryText" })
  advisoryText?: string;

  @Metadata({ data: "json, name=availableEpisodeCount" })
  availableEpisodeCount?: number;

  @Metadata({ data: "json, name=availableSeasonCount" })
  availableSeasonCount?: number;

  @Metadata({ data: "json, name=averageUserRating" })
  averageUserRating?: number;

  @Metadata({ data: "json, name=badge" })
  badge?: string;

  @Metadata({ data: "json, name=channelShortCode" })
  channelShortCode?: string;

  @Metadata({ data: "json, name=classification" })
  classification?: ClassificationSummary;

  @Metadata({ data: "json, name=contextualTitle" })
  contextualTitle?: string;

  @Metadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=customId" })
  customId?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=episodeCount" })
  episodeCount?: number;

  @Metadata({ data: "json, name=episodeName" })
  episodeName?: string;

  @Metadata({ data: "json, name=episodeNumber" })
  episodeNumber?: number;

  @Metadata({ data: "json, name=genres" })
  genres?: string[];

  @Metadata({ data: "json, name=hasClosedCaptions" })
  hasClosedCaptions?: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=images" })
  images?: Map<string, string>;

  @Metadata({ data: "json, name=offers", elemType: shared.Offer })
  offers?: Offer[];

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=releaseYear" })
  releaseYear?: number;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];

  @Metadata({ data: "json, name=seasonId" })
  seasonId?: string;

  @Metadata({ data: "json, name=seasonNumber" })
  seasonNumber?: number;

  @Metadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @Metadata({ data: "json, name=showId" })
  showId?: string;

  @Metadata({ data: "json, name=showTitle" })
  showTitle?: string;

  @Metadata({ data: "json, name=subtype" })
  subtype?: string;

  @Metadata({ data: "json, name=tagline" })
  tagline?: string;

  @Metadata({ data: "json, name=themes", elemType: shared.Theme })
  themes?: Theme[];

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: ItemSummaryTypeEnum;

  @Metadata({ data: "json, name=watchPath" })
  watchPath?: string;
}
