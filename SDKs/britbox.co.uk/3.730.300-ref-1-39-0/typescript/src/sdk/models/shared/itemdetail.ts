import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassificationSummary } from "./classificationsummary";
import { Credit } from "./credit";
import { ItemCustomMetadata } from "./itemcustommetadata";
import { ItemList } from "./itemlist";
import { Offer } from "./offer";
import { Theme } from "./theme";
import { ItemSummary } from "./itemsummary";


export enum ItemDetailTypeEnum {
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


export class ItemDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advisoryText" })
  advisoryText?: string;

  @SpeakeasyMetadata({ data: "json, name=availableEpisodeCount" })
  availableEpisodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=availableSeasonCount" })
  availableSeasonCount?: number;

  @SpeakeasyMetadata({ data: "json, name=averageUserRating" })
  averageUserRating?: number;

  @SpeakeasyMetadata({ data: "json, name=badge" })
  badge?: string;

  @SpeakeasyMetadata({ data: "json, name=channelShortCode" })
  channelShortCode?: string;

  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: ClassificationSummary;

  @SpeakeasyMetadata({ data: "json, name=contextualTitle" })
  contextualTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=credits", elemType: Credit })
  credits?: Credit[];

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=customId" })
  customId?: string;

  @SpeakeasyMetadata({ data: "json, name=customMetadata", elemType: ItemCustomMetadata })
  customMetadata?: ItemCustomMetadata[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=distributor" })
  distributor?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=episodeCount" })
  episodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=episodeName" })
  episodeName?: string;

  @SpeakeasyMetadata({ data: "json, name=episodeNumber" })
  episodeNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=episodes" })
  episodes?: ItemList;

  @SpeakeasyMetadata({ data: "json, name=eventDate" })
  eventDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=genrePaths" })
  genrePaths?: string[];

  @SpeakeasyMetadata({ data: "json, name=genres" })
  genres?: string[];

  @SpeakeasyMetadata({ data: "json, name=hasClosedCaptions" })
  hasClosedCaptions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=images" })
  images?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=offers", elemType: Offer })
  offers?: Offer[];

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=releaseYear" })
  releaseYear?: number;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: ItemDetail;

  @SpeakeasyMetadata({ data: "json, name=seasonId" })
  seasonId?: string;

  @SpeakeasyMetadata({ data: "json, name=seasonNumber" })
  seasonNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=seasons" })
  seasons?: ItemList;

  @SpeakeasyMetadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=show" })
  show?: ItemDetail;

  @SpeakeasyMetadata({ data: "json, name=showId" })
  showId?: string;

  @SpeakeasyMetadata({ data: "json, name=showTitle" })
  showTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: string;

  @SpeakeasyMetadata({ data: "json, name=tagline" })
  tagline?: string;

  @SpeakeasyMetadata({ data: "json, name=themes", elemType: Theme })
  themes?: Theme[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=totalUserRatings" })
  totalUserRatings?: number;

  @SpeakeasyMetadata({ data: "json, name=trailers", elemType: ItemSummary })
  trailers?: ItemSummary[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ItemDetailTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=venue" })
  venue?: string;

  @SpeakeasyMetadata({ data: "json, name=watchPath" })
  watchPath?: string;
}
