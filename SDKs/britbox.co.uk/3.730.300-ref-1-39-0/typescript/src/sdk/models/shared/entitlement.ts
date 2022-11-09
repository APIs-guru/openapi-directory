import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClassificationSummary } from "./classificationsummary";
import { ExclusionRule } from "./exclusionrule";

export enum EntitlementDeliveryTypeEnum {
    Stream = "Stream"
,    Download = "Download"
,    StreamOrDownload = "StreamOrDownload"
,    ProgressiveDownload = "ProgressiveDownload"
,    None = "None"
}

export enum EntitlementItemTypeEnum {
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

export enum EntitlementOwnershipEnum {
    Subscription = "Subscription"
,    Free = "Free"
,    Rent = "Rent"
,    Own = "Own"
,    None = "None"
}

export enum EntitlementResolutionEnum {
    Sd = "SD"
,    Hd720 = "HD-720"
,    Hd1080 = "HD-1080"
,    Hd4K = "HD-4K"
,    External = "External"
,    Unknown = "Unknown"
}


export class Entitlement extends SpeakeasyBase {
  @Metadata({ data: "json, name=activationDate" })
  activationDate?: Date;

  @Metadata({ data: "json, name=classification" })
  classification?: ClassificationSummary;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=deliveryType" })
  deliveryType: EntitlementDeliveryTypeEnum;

  @Metadata({ data: "json, name=exclusionRules", elemType: shared.ExclusionRule })
  exclusionRules?: ExclusionRule[];

  @Metadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=itemId" })
  itemId?: string;

  @Metadata({ data: "json, name=itemType" })
  itemType?: EntitlementItemTypeEnum;

  @Metadata({ data: "json, name=maxDownloads" })
  maxDownloads?: number;

  @Metadata({ data: "json, name=maxPlays" })
  maxPlays?: number;

  @Metadata({ data: "json, name=mediaDuration" })
  mediaDuration?: number;

  @Metadata({ data: "json, name=ownership" })
  ownership: EntitlementOwnershipEnum;

  @Metadata({ data: "json, name=planId" })
  planId?: string;

  @Metadata({ data: "json, name=playCount" })
  playCount?: number;

  @Metadata({ data: "json, name=playPeriod" })
  playPeriod?: number;

  @Metadata({ data: "json, name=remainingDownloads" })
  remainingDownloads?: number;

  @Metadata({ data: "json, name=rentalPeriod" })
  rentalPeriod?: number;

  @Metadata({ data: "json, name=resolution" })
  resolution: EntitlementResolutionEnum;

  @Metadata({ data: "json, name=scopes" })
  scopes: string[];
}
