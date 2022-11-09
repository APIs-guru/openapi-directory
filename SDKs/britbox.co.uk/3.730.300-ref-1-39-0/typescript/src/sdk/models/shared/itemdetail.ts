import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClassificationSummary } from "./classificationsummary";
import { Credit } from "./credit";
import { ItemCustomMetadata } from "./itemcustommetadata";
import { ItemList } from "./itemlist";
import { Offer } from "./offer";
import { ItemDetail } from "./itemdetail";
import { ItemList } from "./itemlist";
import { ItemDetail } from "./itemdetail";
import { Theme } from "./theme";
import { ItemSummary } from "./itemsummary";

export enum ItemDetailTypeEnum {
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


export class ItemDetail extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=credits", elemType: shared.Credit })
  credits?: Credit[];

  @Metadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=customId" })
  customId?: string;

  @Metadata({ data: "json, name=customMetadata", elemType: shared.ItemCustomMetadata })
  customMetadata?: ItemCustomMetadata[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=distributor" })
  distributor?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=episodeCount" })
  episodeCount?: number;

  @Metadata({ data: "json, name=episodeName" })
  episodeName?: string;

  @Metadata({ data: "json, name=episodeNumber" })
  episodeNumber?: number;

  @Metadata({ data: "json, name=episodes" })
  episodes?: ItemList;

  @Metadata({ data: "json, name=eventDate" })
  eventDate?: Date;

  @Metadata({ data: "json, name=genrePaths" })
  genrePaths?: string[];

  @Metadata({ data: "json, name=genres" })
  genres?: string[];

  @Metadata({ data: "json, name=hasClosedCaptions" })
  hasClosedCaptions?: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=images" })
  images?: Map<string, string>;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=offers", elemType: shared.Offer })
  offers?: Offer[];

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=releaseYear" })
  releaseYear?: number;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];

  @Metadata({ data: "json, name=season" })
  season?: ItemDetail;

  @Metadata({ data: "json, name=seasonId" })
  seasonId?: string;

  @Metadata({ data: "json, name=seasonNumber" })
  seasonNumber?: number;

  @Metadata({ data: "json, name=seasons" })
  seasons?: ItemList;

  @Metadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @Metadata({ data: "json, name=show" })
  show?: ItemDetail;

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

  @Metadata({ data: "json, name=totalUserRatings" })
  totalUserRatings?: number;

  @Metadata({ data: "json, name=trailers", elemType: shared.ItemSummary })
  trailers?: ItemSummary[];

  @Metadata({ data: "json, name=type" })
  type: ItemDetailTypeEnum;

  @Metadata({ data: "json, name=venue" })
  venue?: string;

  @Metadata({ data: "json, name=watchPath" })
  watchPath?: string;
}
